<template>    
    <v-container fluid>
    
        <headercasa />
          <v-data-table
    :headers="headers"
    :items="equipo"
    sort-by="placa"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>CRUD</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >Nuevo Equipo</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.Nombre" label="Equipo_Nombre"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.placa" label="Placa_Inventario"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.serial" label="Serial"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.marca" label="Marca"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.referencia" label="Referencia"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="save">Guardar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        fas fa-edit
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
       fas fa-trash-alt
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
    </v-container>
</template>

<script>
import headercasa from "@/components/headercasa.vue";
    export default {
        components:{
            headercasa
        },
         data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Equipo_Nombre',
          align: 'start',
          sortable: false,
          value: 'Nombre',
        },
        { text: 'Placa_Inventario', value: 'placa' },
        { text: 'Serial', value: 'serial' },
        { text: 'Marca', value: 'marca' },
        { text: 'Referencia', value: 'referencia' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      equipo: [],
      editedIndex: -1,
      editedItem: {
        Nombre: '',
        placa: 0,
        serial: 0,
        marca: 0,
        referencia: 0,
      },
      defaultItem: {
        Nombre: '',
        placa: 0,
        serial: 0,
        marca: 0,
        referencia: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Equipo' : 'Editar Equipo'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.equipo = [
          {
            Nombre: 'Mulimetro',
            placa: "123456",
            serial: "2541858",
            marca: "Unit",
            referencia: "V50",
          },
         
        ]
      },

      editItem (item) {
        this.editedIndex = this.equipo.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.equipo.indexOf(item)
        confirm('¿Esta seguro de eliminar este Equipo?') && this.equipo.splice(index, 1)
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.equipo[this.editedIndex], this.editedItem)
        } else {
          this.equipo.push(this.editedItem)
        }
        this.close()
      },
    },
    }
</script>