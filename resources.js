import Programme from '../Programme'
import {withRouter} from 'react-router-dom'
import {gql, graphql} from 'react-apollo'

const query = gql `
  query($id: String!) {
    title {
      name
    }
  }