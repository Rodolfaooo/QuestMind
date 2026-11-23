from django.http.response import HttpResponse
from django.shortcuts import render
from django.contrib.auth.models import User

def cadastro(request):
    if request.method == 'GET':
        return render(request, 'cadastro.html')
    else:
        username = None

def login(request):
    return render(request, 'login.html')
