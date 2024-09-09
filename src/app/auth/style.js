import Styled from 'styled-components';

const AuthenticationWrap = Styled.div`
  position: relative;
  padding: 120px 0;
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
  @media only screen and (max-width: 1399px){
    padding: 80px 0;
  }
  .invoice-authentication-wrap{
    @media only screen and (max-width: 767px){
      padding: 0 15px;
    }
  }
  .invoice-authentication-brand{
    text-align: center;
  }
`;

const Content = Styled.div`
    padding: 100px;
    @media only screen and (max-width: 1599px){
      padding: 50px;
    }
    @media only screen and (max-width: 991px){
      padding: 20px;
    }
    @media only screen and (max-width: 767px){
      text-align: center;
    }
    .auth-content-figure{
      @media only screen and (max-width: 1199px){
        max-width: 420px;
      }
      @media only screen and (max-width: 991px){
        max-width: 100%;
      }
    }
`;

const AuthFormWrap = Styled.div`
  border-radius: 6px;
  margin-top: 25px;
  box-shadow: 0 5px 20px rgba(140,144,164,.08);
  background-color: #FFFFFF;
  .invoice-authentication-top{
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid #E3E6EF;
    .invoice-authentication-top__title{
      font-size: 20px;
      font-weight: 600;
      line-height: 1;
      margin-bottom: 0;
      margin: 10px;
      color: #0A0A0A;
    }
  }
  .invoice-authentication-content{
    // padding: 30px 40px 0 30px; // change after has register
    padding: 30px 40px;
    @media only screen and (max-width: 1599px){
      padding: 30px 30px 0 30px;
    }
    .ant-form-item-label {
      > label{
        font-size: 14px;
        color: #0A0A0A;
      }
    }
    .ant-form-item{
      margin-bottom: 25px;
    }
    .ant-input:focus,
    .ant-input-focused{
      box-shadow: 0 5px 20px rgba(251,53,134,.10);
    }
    .ant-input{
      &::placeholder{
        color: #A0A0A0;
      }
    }
    .ant-form-item-explain-error{
      font-size: 13px;
      margin-top: 2px;
    }
    .invoice-auth-extra-links{
      display: flex;
      justify-content: space-between;
      margin-top: -5px;
      .ant-checkbox-wrapper{
        span{
          font-size: 13px;
          color: #747474;
        }
        .ant-checkbox{
          &+span{
            position: relative;
            top: -2px;
          }
        }
      }
      .forgot-pass-link{
        font-size: 13px;
        color: #8231D3;
      }
    }
    .btn-signIn,
    .btn-reset,
    .btn-create{
      font-size: 14px;
      font-weight: 500;
      border-radius: 6px;
      width: 100%;
      min-height: 48px;
      margin-top: 25px;
    }
    .btn-reset{
      margin-top: 0;
    }
    .invoice-form-divider{
      font-size: 13px;
      color: #F1F2F6;
      text-align: center;
      position: relative;
      margin: 0 -10px 25px -10px;
      &:before{
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        height: 1px;
        background: #E3E6EF;
      }
      span{
        font-weight: 500;
        padding: 0 15px;
        display: inline-block;
        position: relative;
        z-index: 2;
        background: #FFFFFF;
        color: #404040;
      }
    }
    .ant-input-affix-wrapper {
      &.ant-input-password{
        input{
          color: #0A0A0A;
        }
      }
    }
    .invoice-social-login{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: -6px;
      @media only screen and (max-width: 767px){
        justify-content: center;
      }
      &.signin-social{
        li{
          a{
            background-color: #fff;
          }
        }
      }
      li{
        padding:15px 6px;
        a{
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          height: 48px;
          padding: 0 15px;
          background: #F4F5F7;
          color: #404040;
          font-weight: 500;
          transition: background-color 0.3s;
          @media only screen and (max-width: 1399px){
            padding: 0 12px;
          }
          @media only screen and (max-width: 379px){
            height: 44px;
          }
          span:not(.anticon){
            display: inline-block;
            margin-left: 5px;
          }
          svg,
          i{
            width: 20px;
            height: 20px;
          }
          &.google-social{
            background-color: #F0654810;
            color: #F06548;
            &:hover{
              background-color: #F06548;
              svg path{
                fill: #FFFFFF;
              }
            }
            svg path{
              fill: #F06548;
            }
            div{
              height: 20px;
            }
          }
          &.facebook-social{
            background-color: #3A589B10;
            color: #3A589B;
            &:hover{
              background-color: #3A589B;
              color: #FFFFFF;
            }
          }
          &.twitter-social{
            background-color: #03A9F410;
            color: #03A9F4;
            &:hover{
              background-color: #03A9F4;
              color: #FFFFFF;
            }
          }
          &.github-social{
            background-color: #03A9F410;
            color: #090E30;
            &:hover{
              background-color: #03A9F4;
              color: #FFFFFF;
            }
          }
        }
      }
    }
    .ant-input-affix-wrapper{
      padding: 12px 20px;
    }
  }
  .invoice-authentication-bottom{
    text-align: center;
    padding: 25px;
    border-radius: 0 0 6px 6px;
    p{
      font-size: 14px;
      font-weight: 500;
      color: #404040;
      margin-bottom: 0;
      a{
        margin-left: 6px;
        #8231D3;
      }
    }
  }
  .auth-contents{
    display: flex;
    align-items: center;
    justify-content: center;
    form{
      width: 420px;
      h1{
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 45px;
        @media only screen and (max-width: 767px){
          margin-bottom: 28px;
        }
        input::placeholder{
          color: #A0A0A0;
        }
      }
      .auth-form-action{
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        @media only screen and (max-width: 379px){
          flex-flow: column;
          .forgot-pass-link{
            margin-top: 15px;
          }
        }
      }
    }
    #forgotPass{
      .forgot-text{
        margin-bottom: 25px;
      }
      .return-text{
        margin-top: 35px;
      }
    }


  }
  .auth0-login{
    margin: -6px;
    display: flex;
    flex-wrap: wrap;
  a{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      height: 48px;
      padding: 0 26px;
      background: #F8F9FB;
      color: #666D92;
      font-weight: 500;
      border: 0 none;
      border-radius: 5px;
      margin: 6px;
      flex: 1;
      @media (max-width:480px){
        flex: none;
        width: 100%;
      }
  }
}
`;

export { AuthFormWrap, AuthenticationWrap, Content };
