<template>
    <footer>
    <div class="container d-flex align-items-center ">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item me-2" v-for="(link, index) in menuFooter" :key="index">
            <router-link :to="{ name: link.routeName }" class="nav-link" active-class="active">
                {{ link.label }}
            </router-link>
          </li>   
        </ul>
        <ul id="icon" class="navbar-nav">
            <li><i class="fa-brands fa-facebook"></i></li>
            <li><i class="fa-brands fa-tiktok"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
        </ul>
    </div>
    </footer>
</template>

<script>
    export default {
        name: 'FooterComponent',
        data(){
            return{
                menuFooter:[
                    {
                        label:'Home',
                        routeName:'movieList'
                    },
                    {
                        label:'About us',
                        routeName:'about-us'
                    },
                    {
                        label:'Contact',
                        routeName:'contact'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
footer{
    background-color: black;
    color: white;
    width: 100%;
    height: 70px;
    display: flex;
    position: absolute;
    position:fixed;
    bottom:0;
    ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    li:hover{
        font-weight: bolder;
    }
    };
    #icon{
        li{
             padding-left: 10px;
            cursor: pointer;
            li:hover{
                font-weight: bolder;
            }
        }
    }
}

</style>