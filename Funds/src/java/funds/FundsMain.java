
package funds;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet(name="FundsMain", urlPatterns="/funds")
public class FundsMain extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.addHeader("Access-Control-Allow-Origin", "*");
        String format = request.getParameter("format");
        
        
        try{
            PrintWriter writer = response.getWriter();
            writer.write("hello financial world...");
        }
        catch(Exception e){
            e.printStackTrace();
        }
        
    }//end doGET()
    
    
    
}//end FundsMain class
