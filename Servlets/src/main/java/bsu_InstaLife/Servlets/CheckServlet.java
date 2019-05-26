package bsu_InstaLife.Servlets;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(urlPatterns = "/check")
public class CheckServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Gson jsonBuilder = new Gson();
        String answer = jsonBuilder.toJson(new Answer("Moment", true));
        response.getWriter().println(answer);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws  IOException {
        doPost(request, response);
    }
}

class Answer {

    private boolean status;
    private String name;

    Answer(String name, boolean status) {
        setName(name);
        setStatus(status);
    }

    Answer() {
        name = "no name";
        status = false;
    }

    @Override
    public String toString() {
        return ("Name of application: " + name +
                "\nStatus of server: " + status);
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = (name.equals("")) ? "no name" : name;
    }


}
