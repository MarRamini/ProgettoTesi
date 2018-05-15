package servlet;

import java.io.BufferedInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.User;

/**
 * Servlet implementation class ImageHandler
 */
@WebServlet("/ImageHandler")
public class ImageHandler extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ImageHandler() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession(false);
		User user = (User) session.getAttribute("user");
		BufferedInputStream data = null;

		if(user != null){
			try{
				ByteArrayOutputStream buffer = new ByteArrayOutputStream();
				int cont;
				byte[] imageBytes = new byte[2048];
				data = new BufferedInputStream(user.getAvatar());
				System.out.println(data.markSupported());
				boolean isMarkSupported = data.markSupported();
				
				if(isMarkSupported)
					
				
				while((cont = data.read(imageBytes, 0, imageBytes.length)) != -1){	
					buffer.write(imageBytes, 0, cont);
				}
				
				if(isMarkSupported)
					data.reset();			
				
				
				buffer.flush();
			    byte[] byteArray = buffer.toByteArray();
		
				response.setContentType("image/jpeg");
		
				response.setContentLength(byteArray.length);
		
				response.getOutputStream().write(byteArray);
			}catch(Exception e){
				e.printStackTrace();
			}
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
