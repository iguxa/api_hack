<template>
  <v-container class="grey lighten-5 pt-3">
    <v-row>
      <v-col cols="12">
        <h1 class="ma-0 f-1">Project title</h1>
      </v-col>
      <v-col cols="12" sm="8">
        <p
          class="pv-2"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aut nihil alias repellendus tempore, modi facere explicabo beatae blanditiis pariatur incidunt voluptatibus repudiandae animi aliquam! Possimus pariatur provident dolores qui.</p>

        <v-row>
          <v-col v-bind:key="file.id" cols="12" v-for="file in files">
            <v-icon large class="ma-2" color="red lighten-2">{{getFileIcon(file)}}</v-icon>
            <a target="_blank" :href="getFileUrl(file)" class="subheading mr-2">{{file.title}}</a>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card outlined>
          <h3 class="my-2 mx-3">
            Статус конкурса:
            <v-chip class="ma-2" outlined>Неактивен</v-chip>
            <v-chip class="ma-2" color="primary" outlined>Активен</v-chip>
          </h3>
          <v-divider></v-divider>
          <h3 class="my-2 mx-3">
            Текущий этап конкурса:
            <v-chip class="ma-2" color="orange" outlined>Подготовка</v-chip>
            <v-chip class="ma-2" color="green" outlined>Голосование</v-chip>
            <v-chip class="ma-2" outlined>Не состоялся</v-chip>
            <v-chip class="ma-2" color="red" outlined>Отменён</v-chip>
            <v-chip class="ma-2" color="primary" outlined>Завершён</v-chip>
          </h3>
          <v-divider></v-divider>
          <h3 class="my-2 mx-3">Обсуждение</h3>
          <div style="height: 300px; overflow-y: scroll">
            <v-btn block depressed>
              <v-icon class="mr-2">mdi-thumb-up-outline</v-icon>За
            </v-btn>
            <v-btn block depressed>
              <v-icon class="mr-2">mdi-thumb-up-outline</v-icon>За
            </v-btn>
            <v-btn block depressed>
              <v-icon class="mr-2">mdi-thumb-up-outline</v-icon>За
            </v-btn>
            <v-btn block depressed>
              <v-icon class="mr-2">mdi-thumb-up-outline</v-icon>За
            </v-btn>
            <v-btn block depressed>
              <v-icon class="mr-2">mdi-thumb-up-outline</v-icon>За
            </v-btn>
            <v-btn block depressed>
              <v-icon class="mr-2">mdi-thumb-up-outline</v-icon>За
            </v-btn>
            <v-btn block depressed>
              <v-icon class="mr-2">mdi-thumb-up-outline</v-icon>За
            </v-btn>
            <v-btn block depressed>
              <v-icon class="mr-2">mdi-thumb-up-outline</v-icon>За
            </v-btn>
            <v-btn block depressed>
              <v-icon class="mr-2">mdi-thumb-up-outline</v-icon>За
            </v-btn>
            <v-btn block depressed>
              <v-icon class="mr-2">mdi-thumb-up-outline</v-icon>За
            </v-btn>
            <v-btn block depressed>
              <v-icon class="mr-2">mdi-thumb-up-outline</v-icon>За
            </v-btn>
            <v-btn block depressed>
              <v-icon class="mr-2">mdi-thumb-up-outline</v-icon>За
            </v-btn>
            <v-btn block depressed>
              <v-icon class="mr-2">mdi-thumb-up-outline</v-icon>За
            </v-btn>
            <v-btn block depressed>
              <v-icon class="mr-2">mdi-thumb-up-outline</v-icon>За
            </v-btn>
            <v-btn block depressed>
              <v-icon class="mr-2">mdi-thumb-up-outline</v-icon>За
            </v-btn>
            <v-btn block depressed>
              <v-icon class="mr-2">mdi-thumb-up-outline</v-icon>За
            </v-btn>
            <v-btn block depressed>
              <v-icon class="mr-2">mdi-thumb-up-outline</v-icon>За
            </v-btn>
          </div>
          <v-text-field
            v-model="message"
            :append-outer-icon="'mdi-send'"
            :prepend-icon="icon"
            filled
            clear-icon="mdi-close-circle"
            clearable
            label="Message"
            type="text"
            @click:append="toggleMarker"
            @click:append-outer="sendMessage"
            @click:prepend="changeIcon"
            @click:clear="clearMessage"
          ></v-text-field>

          <v-divider></v-divider>
          <h3 class="my-2 mx-3">Голосовать</h3>
          <v-row no-gutters>
            <v-col>
              <v-btn block depressed>
                <v-icon class="mr-2">mdi-thumb-up-outline</v-icon>За
              </v-btn>
            </v-col>
            <v-col>
              <v-btn block depressed>Воздержаться</v-btn>
            </v-col>
            <v-col>
              <v-btn block depressed>
                <v-icon class="mr-2">mdi-thumb-down-outline</v-icon>Против
              </v-btn>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <v-btn block depressed color="primary">
                <v-icon class="mr-2">mdi-thumb-up-outline</v-icon>За
              </v-btn>
            </v-col>
            <v-col>
              <v-btn block depressed color="primary">Воздержаться</v-btn>
            </v-col>
            <v-col>
              <v-btn block depressed color="primary">
                <v-icon class="mr-2">mdi-thumb-down-outline</v-icon>Против
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    props: {
      id: { Number, required:true }
    },
    data() { return {
      files:[],
    }},
    methods: {
      load() {
        this.fetch(this.id).then(data => {
          this.files = data.files;
        });
      },
      fetch(id) {
        return new Promise(function (resolve) {
          resolve({
            files: [{
              id: 1,
              title: 'instruction.pdf',
            }, {
              id: 2,
              title: 'instruction.doc'
            }, {
              id: 3,
              title: 'instruction.txt'
            }],
          });
        });
      },
      getFileIcon(file) {
        let extMap = {
          pdf: 'pdf',
          doc: 'word',
          docx: 'word',
          xls: 'excel',
          xlsx: 'excel',
        };
        let ext = file.title.split('.').splice(-1, 1);
        return 'mdi-file'+(typeof(extMap[ext])!=='undefined'?'-'+extMap[ext]:'');
      },
      getFileUrl(file) {
        return '/file/'+file.id
      }
    },
    mounted() {
      this.load();
    }
  };
</script>
