# api/admin.py
from django.contrib import admin
from .models import Usuario, BrainstormingIdea, Proyecto, Tarea, Relacion, Trayectoria, RegistroFinanciero

admin.site.register(Usuario)
admin.site.register(BrainstormingIdea)
admin.site.register(Proyecto)
admin.site.register(Tarea)
admin.site.register(Relacion)
admin.site.register(Trayectoria)
admin.site.register(RegistroFinanciero)
