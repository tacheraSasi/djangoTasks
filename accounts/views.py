from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Create your views here.

def login(request):
    return render(request,"accounts/login.html")


def loginPost(request):
    return render(request,"accounts/login.html")

def register(request):
    
    return render(request,"accounts/register.html")

def registerPost(request):
    if request.method == "POST":
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']

@login_required
def dashboard(request):
    return render(request,"accounts/dashboard.html")

def welcome(request):
    return render(request,"accounts/welcome.html")

def logout(request):
    print("User has looged out successfully")