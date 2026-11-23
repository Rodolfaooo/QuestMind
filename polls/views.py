from django.shortcuts import render
from django.contrib.auth.decorators import login_required

@login_required
def pagina_inicial(request):
    return render(request, 'index.html')

@login_required
def pagina_notas(request):
    return render(request, 'notas.html')

@login_required
def pagina_sobre(request):
    return render(request, 'sobre.html')