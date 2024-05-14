import { VantComponent } from '../common/component';
import { button } from '../mixins/button';
import { canIUseFormFieldButton } from '../common/version';

const mixins = [button];
if (canIUseFormFieldButton()) {
  mixins.push('wx://form-field-button');
}

VantComponent({
  mixins,

  classes: ['hover-class', 'loading-class'],

  data: {
    baseStyle: '',
  },

  props: {
    formType: String,
    icon: String,
    classPrefix: {
      type: String,
      value: 'van-icon',
    },
    url: {
      type: String,
      value: '',
    },
    replace: Boolean,
    plain: Boolean,
    block: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    loadingText: String,
    customStyle: String,
    useLoadingIconSlot: Boolean,
    loadingType: {
      type: String,
      value: 'circular',
    },
    type: {
      type: String,
      value: 'default',
    },
    dataset: null,
    size: {
      type: String,
      value: 'normal',
    },
    loadingSize: {
      type: String,
      value: '20px',
    },
    color: String,
  },

  methods: {
    onClick(event: WechatMiniprogram.TouchEvent) {
      this.$emit('click', event);

      const {
        canIUseGetUserProfile,
        openType,
        getUserProfileDesc,
        lang,
        url,
        replace,
      } = this.data;

      if (url !== '') {
        replace ? wx.redirectTo({ url }) : wx.navigateTo({ url });
        return;
      }

      if (openType === 'getUserInfo' && canIUseGetUserProfile) {
        wx.getUserProfile({
          desc: getUserProfileDesc || '  ',
          lang: lang || 'en',
          complete: (userProfile) => {
            this.$emit('getuserinfo', userProfile);
          },
        });
      }
    },
  },
});
