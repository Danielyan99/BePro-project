import { connect } from "react-redux"
import { getCatalog } from "../../action/actions"
import { useEffect } from "react"
import HomeCatalog from "./HomeCatalog"

const HomeCatalogContainer = ({ catalog, getCatalog }) => {
  useEffect(() => {
    getCatalog()
  }, [getCatalog])

  return catalog.length ? (
    <div>
      <HomeCatalog catalog={catalog} />
    </div>
  ) : (
    <div>Loading...</div>
  )
}

const mapStateToProps = (state) => ({
  catalog: state.catalog,
})

export default connect(mapStateToProps, { getCatalog })(HomeCatalogContainer)
