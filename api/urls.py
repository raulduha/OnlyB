# api/urls.py
from django.urls import path
from .views import (
    UsuarioList, BrainstormingIdeaList, ProyectoList, TareaList,
    RelacionList, TrayectoriaList, RegistroFinancieroList
)

urlpatterns = [
    path('usuarios/', UsuarioList.as_view(), name='usuario-list'),
    path('brainstorming-ideas/', BrainstormingIdeaList.as_view(), name='brainstorming-idea-list'),
    path('proyectos/', ProyectoList.as_view(), name='proyecto-list'),
    path('tareas/', TareaList.as_view(), name='tarea-list'),
    path('relaciones/', RelacionList.as_view(), name='relacion-list'),
    path('trayectorias/', TrayectoriaList.as_view(), name='trayectoria-list'),
    path('registro-financiero/', RegistroFinancieroList.as_view(), name='registro-financiero-list'),
]
