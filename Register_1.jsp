<%@page import="java.sql.PreparedStatement" %>
<%@page import="java.sql.DriverManager" %>
<%@page import="java.sql.Connection" %>
<%@page import="java.sql.ResultSet" %>

<%
        String idea=request.getParameter("Submit");
            Class.forName("com.mysql.jdbc.Driver");
            Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/NESGamePortal","root","compaqapple");
            PreparedStatement   st=connection.prepareStatement("insert into Ideas values(?)");
            st.setString(1,idea);
            st.executeUpdate();
            response.sendRedirect("ideaSubmit.html");
                


%>