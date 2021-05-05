<%@page import="java.sql.PreparedStatement" %>
<%@page import="java.sql.DriverManager" %>
<%@page import="java.sql.Connection" %>
<%@page import="java.sql.ResultSet" %>
 

<%
    
         String username=request.getParameter("usernamel");
        String password=request.getParameter("passwordl");
            Class.forName("com.mysql.jdbc.Driver");
            Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/NESGamePortal","root","compaqapple");
            PreparedStatement   st=connection.prepareStatement("select * from Members where Username=? and Password=?");
            st.setString(1,username);
            st.setString(2,password);
            ResultSet rs=st.executeQuery();
            if(rs.next())
            {
           response.sendRedirect("index2.html");
                
            }
            else
            {
           response.sendRedirect("form/form_1.html");
            }

%>