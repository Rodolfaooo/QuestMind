from django.urls import path
from . import views

urlpatterns = [
    path('', views.pagina_inicial, name='pagina_inicial'),
    path('notas.html', views.pagina_notas, name='pagina_notas'),
    path('sobre.html', views.pagina_sobre, name='pagina_sobre'),
]

