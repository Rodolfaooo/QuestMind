from django.shortcuts import render

# Create your views here.
def pagina_inicial(request):
    return render(request, 'index.html')

def pagina_notas(request):
    return render(request, 'notas.html')

def pagina_sobre(request):
    return render(request, 'sobre.html')