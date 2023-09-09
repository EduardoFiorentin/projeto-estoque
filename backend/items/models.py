from django.db import models

class Item(models.Model):

    CATEGORY = (
        ('1', 'Vestuário Tático'),
        ('2','Armamento e Munição'),
        ('3','Equipamento de Comunicação'),
        ('4','Equipamento de Sobrevivência'),
        ('5','Equipamento de Missões Especiais'),
        ('6','Veículos Militares'),
        ('7','Equipamentos de Engenharia'),
        ('8','Equipamento de Inteligência e Vigilância'),
        ('9','Equipamento Médico Militar'),
        ('10','Equipamento de Logística'),
        ('11','Equipamento de Treinamento'),
        ('12','Equipamento de Sapa'),
        ('13', 'Outros'),
    )

    name = models.CharField(max_length=150, null=False, blank=False)
    description = models.CharField(max_length=300, default='')
    category = models.CharField(max_length=2, choices=CATEGORY, blank=False, null=False, default='13')
    qtd = models.IntegerField(null=False, blank=False, default=0)
    date_cads = models.DateTimeField(auto_now=True)
