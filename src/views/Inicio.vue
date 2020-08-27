<template>    
    <!-- <v-img align="center" src="https://www.euroresidentes.com/empresa/motivacion/wp-content/uploads/sites/7/2014/04/como-motivar-a-las-personas-euroresidentes.jpg"> -->
    <v-container fluid>
        
            <cabezalhome />
        
            <!-- BOTONES CON IMAGEN-->
            
            <template>
                <v-col class="col-sm-12">                
                    <v-row justify="center">
                        <v-col class="col-lg-2">
                        <v-card align-self="center" color="">
                            
                                <v-img width="250" height="200" align="center" src="https://static.wixstatic.com/media/6ae66d7d8c434534b8b3eded5a74ff11.jpg/v1/fill/w_314,h_260,al_c,q_80,usm_0.66_1.00_0.01/Hombre%20sonriente%20en%20la%20computadora%20port%C3%A1.webp">
                                    
                                    <v-col class="text-center">
                                        <v-btn class="ma-2" dark>NOTICIAS</v-btn>
                                    </v-col>
                                    
                                </v-img>
                        
                        </v-card>
                        </v-col>
                        <v-col class="col-lg-2">
                        <v-card aling="center" color="">
                            <v-img width="250" height="200" align="center" src="https://static.wixstatic.com/media/11062b_7ec671fa39944a06bb0dec36f05cb1bd~mv2.jpg/v1/fill/w_314,h_260,al_c,q_80,usm_0.66_1.00_0.01/Objetos%20tem%C3%A1ticos%20grises.webp">
                                <div class="text-center">
                                    <v-btn class="ma-2" dark>SOFTWARE</v-btn>
                                </div>
                            </v-img>
                        </v-card>
                        </v-col>
                        <v-col class="col-lg-2">
                        <v-card aling="center" color="">
                            <v-img width="250" height="200" align="center" src="https://static.wixstatic.com/media/39699f98d24d44cdabb86a1b8cfef1c0.jpg/v1/fill/w_319,h_260,al_c,q_80,usm_0.66_1.00_0.01/cuaderno.webp">
                                <div class="text-center">
                                    <v-btn class="ma-2" dark>LABORATORIOS</v-btn>
                                </div>
                            </v-img>
                        </v-card>
                        </v-col>
                    </v-row>              
                </v-col>
            </template>
       

            <!-- Botón flotante -->
            <!-- <v-fab-transition>
              <v-btn
                v-show="true"
                color="pink"
                dark
                absolute
                top
                right
                fab
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-fab-transition> -->

        
        <!-- Botones navegción -->
        <v-row align="center"> 
            <v-col align="center">
                <v-card  max-width="500">
                    <v-bottom-navigation
                        :value="activeBtn"
                        color="primary"
                        horizontal
                    >
                        <v-btn>
                        <span>LABORATORIOS</span>
                        <!-- <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img> -->
                        </v-btn>
                        
                        <v-btn>
                        <span>SOFTWARE</span>
                        <v-icon>mdi-heart</v-icon>
                        </v-btn>

                        <v-btn>
                        <span>NOTICIAS</span>
                        <v-icon>mdi-map-marker</v-icon>
                        </v-btn>

                    </v-bottom-navigation>
                </v-card>
            </v-col>
        </v-row>

        <v-col align="center">
            <v-img src="https://static.wixstatic.com/media/727348_b44697423672478098e2ab9f8e88b384~mv2.jpg/v1/fill/w_593,h_609,al_c,q_85,usm_0.66_1.00_0.01/cap1.webp" width="600" height="800" align="center"></v-img>
        </v-col>

        
           
        <v-row>
            <!-- Carrusel -->
            <v-card class="mx-auto" width="300">
                <v-carousel  height="200">
                    <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    ></v-carousel-item>
                </v-carousel>
            </v-card>
        </v-row>

        <v-row>
            <piehome />
        </v-row>

    
    </v-container>
    <!-- </v-img> -->
</template>s

<script>
import cabezalhome from "@/components/cabezalhome.vue";
import piehome from "@/components/piehome.vue";
export default {
    data () {
      return {
        //   Para el carusel
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],

      }
    },
    components:{
        cabezalhome,
        piehome,
    }
}
</script>>

