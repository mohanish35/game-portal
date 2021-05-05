<%@page import="java.sql.PreparedStatement" %>
<%@page import="java.sql.DriverManager" %>
<%@page import="java.sql.Connection" %>
<%@page import="java.sql.ResultSet" %>

<%
        String username=request.getParameter("username");
        String email=request.getParameter("email");
        String password=request.getParameter("password");
            Class.forName("com.mysql.jdbc.Driver");
            Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/NESGamePortal","root","compaqapple");
            PreparedStatement   st=connection.prepareStatement("insert into Members values(?,?,?)");
            st.setString(1,username);
            st.setString(2,email);
            st.setString(3,password);
            st.executeUpdate();
            response.sendRedirect("form/form.html");
                


%>