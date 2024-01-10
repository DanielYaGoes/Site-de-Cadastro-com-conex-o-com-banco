package example.rest;

import example.DAO.AgendaDAO;
import example.codigoprincipal.Contato;
import example.codigoprincipal.Pessoa;
import org.json.JSONArray;

import javax.annotation.PostConstruct;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;



@Path("/contatos")
public class ControllerContato {
    private AgendaDAO AgendaDAO;

    @PostConstruct
    private void init() {
        AgendaDAO = new AgendaDAO();
    }


    @GET
    @Path("/get/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response retornaContato(@PathParam("id") Integer id) {

        Contato contato = AgendaDAO.findContatoById(id);

        return Response.ok(contato.toJSON().toString()).build();
    }

    @POST
    @Path("/edit")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response editarContato(String data) {
            Contato contato= null;
        try {
            contato = new Contato(data);
            Contato ctt = AgendaDAO.findContatoById(contato.getId());
            contato.setPessoa(ctt.getPessoa());
            AgendaDAO.update(contato);

        } catch (Exception e) {

            e.printStackTrace();
        }
        return Response.ok(contato.toJSON().toString()).build();
    }

    @DELETE
    @Path("/delete/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void removerContato(@PathParam("id") Integer id) {
            AgendaDAO.deleteContato(id);
    }


    @POST
    @Path("/criar")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public void adicionarPessoa(String data) {
        Contato contato=  new Contato(data);
            AgendaDAO.save(contato);
    }


}
