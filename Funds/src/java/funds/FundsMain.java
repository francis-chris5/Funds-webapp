
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
        
        // some test data for setting up, delete that class as well
        Person me = new Person("Chris", 43, "Clarksville");
        
        try{
            PrintWriter writer = response.getWriter();
            if(format.equals("xml")){
                writer.write(me.toXML(true));
            }
            else if(format.equals("json")){
                writer.write(me.toJSON());
            }
            else if(format.equals("csv")){
                writer.write(me.toCSV());
            }
            else{

            }
        }
        catch(Exception e){
            e.printStackTrace();
        }
        
    }//end doGET()
    
    
    
}//end FundsMain class
