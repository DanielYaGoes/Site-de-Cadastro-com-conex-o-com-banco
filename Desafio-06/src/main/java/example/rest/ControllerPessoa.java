package example.rest;

import example.DAO.AgendaDAO;
import example.codigoprincipal.Pessoa;
import org.json.JSONArray;
import org.json.JSONObject;

import javax.annotation.PostConstruct;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;


@Path("/cadastro")

public class ControllerPessoa {
    private AgendaDAO AgendaDAO;

    @PostConstruct
    private void init() {
        AgendaDAO = new AgendaDAO();
    }


    @GET
    @Path("/get")
    @Produces(MediaType.APPLICATION_JSON)
    public Response retornaListaDePessoas() {

        List<Pessoa> pessoas = AgendaDAO.findAllPessoa();
        JSONArray jsonArray = null;

        try {

             jsonArray = new JSONArray();
            for (Pessoa pessoa: pessoas){
                jsonArray.put(pessoa.toJSON());

            }
        } catch (Exception e) {

            e.printStackTrace();
        }


        return Response.ok(jsonArray.toString()).build();
    }

    @GET
    @Path("/get/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response retornaPessoa(@PathParam("id") Integer id) {

        Pessoa pessoa = AgendaDAO.findPessoaById(id);

        return Response.ok(pessoa.toJSON().toString()).build();
    }

    @POST
    @Path("/edit")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response editarPessoa(String data) {
            Pessoa pessoa = null;
        try {
            pessoa = new Pessoa(data);
            pessoa = AgendaDAO.update(pessoa);


        } catch (Exception e) {

            e.printStackTrace();
        }
        return Response.ok(pessoa.toJSON().toString()).build();
    }

    @DELETE
    @Path("delete/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void removerPessoa(@PathParam("id") Integer id) {
            AgendaDAO.deletePessoa(id);
    }



    @POST
    @Path("/criar")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public void adicionarPessoa(String data) {
        try {

            Pessoa pessoa = new Pessoa(data);

            AgendaDAO.save(pessoa);

        } catch (Exception e) {

            e.printStackTrace();
        }

    }


}
