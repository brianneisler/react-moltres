import { PropTypes } from 'react'

export default PropTypes.shape({
  boot: PropTypes.func.isRequired,
  factory: PropTypes.func.isRequired,
  getModule: PropTypes.func.isRequired,
  getModulesInDependencyOrder: PropTypes.func.isRequired,
  injection: PropTypes.object.isRequired,
  registerModules: PropTypes.func.isRequired
})
