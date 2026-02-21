function Login () {

    return (
        <>
            <div className="login-container">
                <div className="login-card">
                    <h2>Login Form</h2>
                    <form action="">

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Enter email" required/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="*********" required />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="login-btn">Login</button>
                        </div>

                        
                    </form>
                    <div className="login-links">
                        <a href="#">Forget Password?</a>
                        <a href="#">Register</a>
                    </div>
                </div>    
            </div>
            
        </>
    );
}

export default Login;