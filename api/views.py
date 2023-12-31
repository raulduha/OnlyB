# api/views.py
# api/views.py
from rest_framework import generics
from .models import Usuario, BrainstormingIdea, Proyecto, Tarea, Relacion, Trayectoria, RegistroFinanciero
from .serializers import (
    UsuarioSerializer, BrainstormingIdeaSerializer, ProyectoSerializer,
    TareaSerializer, RelacionSerializer, TrayectoriaSerializer, RegistroFinancieroSerializer
)

class UsuarioList(generics.ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class BrainstormingIdeaList(generics.ListCreateAPIView):
    queryset = BrainstormingIdea.objects.all()
    serializer_class = BrainstormingIdeaSerializer

class ProyectoList(generics.ListCreateAPIView):
    queryset = Proyecto.objects.all()
    serializer_class = ProyectoSerializer

class TareaList(generics.ListCreateAPIView):
    queryset = Tarea.objects.all()
    serializer_class = TareaSerializer

class RelacionList(generics.ListCreateAPIView):
    queryset = Relacion.objects.all()
    serializer_class = RelacionSerializer

class TrayectoriaList(generics.ListCreateAPIView):
    queryset = Trayectoria.objects.all()
    serializer_class = TrayectoriaSerializer

class RegistroFinancieroList(generics.ListCreateAPIView):
    queryset = RegistroFinanciero.objects.all()
    serializer_class = RegistroFinancieroSerializer
