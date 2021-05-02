import { connect } from "react-redux"
import Catalog from "./Catalog"
import { getCatalog } from "../../action/actions"

const CatalogContainer = ({ getCatalog }) => {
  console.log(getCatalog)
  return (
    <div>
      <div>
        <Catalog />
      </div>
    </div>
  )
}

export default connect(null, { getCatalog })(CatalogContainer)
