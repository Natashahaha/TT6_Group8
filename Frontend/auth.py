from flask import Flask,request,render_template,jsonify,session, redirect, url_for, flash
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, logout_user, login_required, current_user
from flask_login import LoginManager 
from flask_login import UserMixin
from models import *

def createBasicApp():

    # Create instance of Flask class
    app = Flask(__name__)

    # To make client side secure
    app.secret_key = "tma"

    login_manager = LoginManager()
    login_manager.login_view = 'login'
    login_manager.init_app(app)


    @login_manager.user_loader
    def loadUser(userEmail):
        return systemUser.getUserEmail(userEmail)


    return app

class User(UserMixin):
    def __init__(self, email, record):
        self.email = email
        self.record = record

    def get_email(self):
        return self.email

    def get_id(self):
        return self.email

    def get_record(self):
        return self.record

    def is_authenticated(self):
        return True
        
    def __str__(self):
        return f"{self.record}"

def toLoginUser(email):
    login_user(email)
    

def toLogoutUser():
    logout_user()
    