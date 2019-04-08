<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Recommend from "./recommend.vue";
import Tools from "./tools.vue";

export default {
  functional: true,
  render: function(createElement, context){
    const { props: { uiTplType = ''}} = context;
    switch(uiTplType) {
      case 'RECOMMEND':
        return createElement(Recommend)
      case 'TOOLS':
       return createElement(Tools)
    }
  },
};
</script>
