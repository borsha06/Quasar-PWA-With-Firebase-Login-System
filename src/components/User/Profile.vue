<template>
      <q-card>
        <div class="text-center">
            <!--<q-icon large color="green darken-2">check_circle</q-icon>-->
              <h3 class="green--text">Instructor, Let's Create a Profile</h3>
              <!--<h4 class="headline mb-0"><b class="red&#45;&#45;text">Name :</b> {{ user.name }}</h4>-->
          <img :src="user.photoUrl || this.previewImage" height="200px" width="200px"/>
          <q-btn data-target="logo-upload" type="button" @click="chooseFiles()" class="btn btn-default fileinput-btn"
                  style="margin-left: 8px;" data-loading-text="  <i class='fa fa-spinner fa-spin'></i>">
           Edit

          </q-btn>
          <input id="logo-upload" class="hide" accept="image/*" name="file" type="file" @change="uploadImage"
                   style="display: none" required>
              <h4 class="headline mb-0"><b class="red--text">Email :</b> {{ user.email }}</h4>
        <h3> I am a
          <q-select
            v-model="select"
            :options="selectOptions"></q-select>
        </h3>
        About Me  <textarea v-model="model"></textarea>
        </div>
        <q-card-actions align="center">
          <q-btn color="primary" align="center" label="Add" type="submit" v-on:click="writeUserData(user.id,select)"></q-btn>
        </q-card-actions>
     </q-card>
</template>
<script>
import * as firebase from 'firebase'
export default {
  data () {
    return {
      previewImage: '',
      select: 'ch',
      model: '',
      selectOptions: [
        {
          label: 'Choreographer',
          value: 'choreographer'
        },
        {
          label: 'Instructor',
          value: 'in'
        }
      ]
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  created () {
    if (this.previewImage === '' || this.user.photoUrl === undefined) {
      this.previewImage = '/statics/no-img.jpg'
    }
  },
  methods: {
    writeUserData: function (userId) {
      console.log(userId)
      firebase.database().ref('users/' + userId).set({
        username: this.user.name,
        email: this.user.email,
        select: this.select,
        profile_picture: this.user.photoUrl || this.previewImage,
        about_me: this.model
      })
      this.$router.push('/main')
    },
    uploadImage (event) {
      // eslint-disable-next-line
      var input = event.target;
      if (input.files && input.files[0]) {
        // eslint-disable-next-line
        var reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    chooseFiles () {
      // eslint-disable-next-line
      document.getElementById('logo-upload').click();
    }
  }
}
</script>
