# api/models.py
from django.db import models

class Usuario(models.Model):
    nombre = models.CharField(max_length=255)
    correo = models.EmailField(unique=True)
    contrasena = models.CharField(max_length=255)
    rol = models.CharField(max_length=50)
    class Meta:
        app_label = 'api'

class BrainstormingIdea(models.Model):
    descripcion = models.TextField()
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    usuario = models.ForeignKey('Usuario', on_delete=models.CASCADE)

class Proyecto(models.Model):
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField()
    fecha_inicio = models.DateField()
    fecha_finalizacion = models.DateField()
    estado = models.CharField(max_length=50)
    idea_brainstorming = models.ForeignKey('BrainstormingIdea', null=True, blank=True, on_delete=models.SET_NULL)

class Tarea(models.Model):
    descripcion = models.TextField()
    asignado_a = models.ForeignKey('Usuario', on_delete=models.CASCADE)
    fecha_inicio = models.DateField()
    fecha_finalizacion = models.DateField()
    estado = models.CharField(max_length=50)

class Relacion(models.Model):
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField()

class Trayectoria(models.Model):
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField()
    relaciones = models.ManyToManyField('Relacion')

class RegistroFinanciero(models.Model):
    proyecto = models.ForeignKey('Proyecto', on_delete=models.CASCADE)
    tipo = models.CharField(max_length=50)  # 'Ganancia' o 'Pérdida'
    descripcion = models.TextField()
    monto = models.DecimalField(max_digits=10, decimal_places=2)
    fecha = models.DateField()
