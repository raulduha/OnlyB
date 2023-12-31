# api/serializers.py
from rest_framework import serializers
from .models import Usuario, BrainstormingIdea, Proyecto, Tarea, Relacion, Trayectoria, RegistroFinanciero

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'

class BrainstormingIdeaSerializer(serializers.ModelSerializer):
    class Meta:
        model = BrainstormingIdea
        fields = '__all__'

class ProyectoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proyecto
        fields = '__all__'

class TareaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarea
        fields = '__all__'

class RelacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Relacion
        fields = '__all__'

class TrayectoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trayectoria
        fields = '__all__'

class RegistroFinancieroSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistroFinanciero
        fields = '__all__'
