from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Create your views here.

def login(request):
    return render(request,"accounts/login.html")

def register(request):
    if request.met
    return render(request,"accounts/register.html")

@login_required
def dashboard(request):
    return render(request,"accounts/dashboard.html")

def welcome(request):
    return render(request,"accounts/welcome.html")

def logout(request):
    print("User has looged out successfully")