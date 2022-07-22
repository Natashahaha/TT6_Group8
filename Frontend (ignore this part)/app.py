from auth import *
import csv
from datetime import datetime
from werkzeug.utils import secure_filename


app = createBasicApp()

# Routing by creating route functions and the respective html that the route will render to

# Set default page at index
@app.route("/") 
def base():
    toLogoutUser() # Make sure user is logout before trying to login again
    return render_template("index.html")

# Render to register html
@app.route("/register", methods= ["GET","POST"]) 
def register():
    if request.method == "GET": # Request data
        toLogoutUser() # Make sure user is logout before trying to login again
        return render_template('register.html')

    elif request.method == "POST": # Send or update data to server
        req = request.form
        regEmail = req.get("email")
        regPassword = req.get("password")
        regNric = req.get("ic").upper()

        user = systemUser.getUserEmail(regEmail)
        userNRIC = systemUser.getUserNRIC(regNric)

        if user: # if user already exist in database
            message = "Email address already exists"  
            print(message)        
            return render_template('register.html', message=message)

        else:
            newUser = systemUser(regEmail, generate_password_hash(regPassword, method='sha256'), regNric)
            message = "You Have Been Successfully Registered!"
            print(message)
            print(f"Email: {regEmail}")
            print(f"Password: {regPassword}")
            print(f"NRIC: {regNric}")
            return render_template('register.html', message=message)

@app.route("/index", methods= ["GET","POST"])
def index():
    if request.method == "GET": # Request data
        toLogoutUser() # Make sure user is logout before trying to login again
        return render_template('index.html')

    elif request.method == "POST": # Send or update data to server
        req = request.form
        loginEmail = req.get("email")
        loginPassword = req.get("password")
        user = systemUser.getUserEmail(loginEmail)
        print("User Information: ",user)

        # Need to validate if user is registered in database  
        if not user: # If user not in database
            message = "Please check your login details and try again."
            print(message) 
            return render_template("index.html", message=message)

        elif not check_password_hash(user.record['password'], loginPassword): # Otherwise, if password not matched in database
            message = "Please check your login details and try again."
            print(message)        
            return render_template("index.html", message=message)

        else: # If user email and password all correct as per database
            toLoginUser(user)
            print("Login Successfully!")
            print(f"Email: {loginEmail}")
            print(f"Password: {loginPassword}")
            return redirect(url_for("catalog"))



@app.route("/dashboard", methods= ["GET","POST"])
@login_required
def dashboard():
    return render_template("dashboard.html", name=current_user.record['email'])

@app.route("/logout")
@login_required
def logout():
    oldUser = current_user.get_id()
    toLogoutUser()
    print(f"{oldUser} has logged out.")
    return redirect(url_for("index"))

app.run(debug=True, host='0.0.0.0')

if __name__ == "__main__":
  app.run(debug=True)