package bsu_InstaLife.Servlets;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(urlPatterns ="/get")
public class getNameServlet extends HttpServlet{

        @Override
        protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

            try {

                String name = request.getParameter("name");

                if (name != null) {
                    if (name.length() > 100) {
                        response.getWriter().println("Name is so long!");
                    } else {
                        response.getWriter().println("Name is " + name);
                    }
                }

            } catch (IOException e) {
                System.out.println("Input/output error!");
            }
        }

        @Override
        protected void doPost(HttpServletRequest request, HttpServletResponse response) throws  IOException {
            doGet(request, response);
        }

}
