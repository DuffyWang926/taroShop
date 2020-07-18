import React,{ Component, PureComponent } from 'react'
// import { View, Text , Image, Swiper} from '@tarojs/components'

import './index.scss'

import { connect } from 'react-redux'


const namespace = 'home'
const namespaceGlobal = 'global'

const mapStateToProps = (state) => {
  return {
    ...state[namespace],
    ...state[namespaceGlobal],
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
    getBannerList: (query) => {
      dispatch({
        type: `${namespace}/getBannerList`,
        payload: query,
      });
    },
    
    
  }
};

@connect(mapStateToProps, mapDispatchToProps)

export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {

    }
  }

  componentWillMount () {
    this.props.getBannerList && this.props.getBannerList()
    
    
   }

  componentDidMount () {   
  }

 

  componentWillUnmount () { }

  componentDidShow () { 
    

  }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }


  render () {
    
    return (
      <div 
        className='index page'
      >
        index

      </div>
    )
  }
}
