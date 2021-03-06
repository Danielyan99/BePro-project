import { connect } from "react-redux"
import Catalog from "./Catalog"
import { getCatalog } from "../../action/actions"
import { useEffect } from "react"

const CatalogContainer = ({ catalog, getCatalog }) => {
  useEffect(() => {
    getCatalog()
  }, [getCatalog])

  return catalog.length ? (
    <div>
      <Catalog catalog={catalog} />
    </div>
  ) : (
    <div>Loading...</div>
  )
}

const mapStateToProps = (state) => ({
  catalog: state.catalog,
})

export default connect(mapStateToProps, { getCatalog })(CatalogContainer)
