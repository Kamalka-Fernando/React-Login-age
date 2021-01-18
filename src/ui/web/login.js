const Login = () => {
    return ( 
        <form className="form">
            <label classname="label">Username</label>
            <br/>
                <input type="text" name="username" />

            <br/>
            <label classname="label">Password</label>
            <br/>
                <input type="password" name="password" />
            <br/>
            <input type="submit" value="Submit" />

        </form>
        const loginList = ({username, password}) => {
            
        
            return ( 
                <div className="blog-list">
                {/* connect databse here.Don't know to do */}
                </div>
             );
        }
     );
  }
   
  export default Login;