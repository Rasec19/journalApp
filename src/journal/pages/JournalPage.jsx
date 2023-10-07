import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView, SelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis praesentium blanditiis labore minima excepturi tempora deserunt minus ducimus quos similique, distinctio, fugit fugiat aut quae aspernatur quaerat ea dolores iusto.</Typography> */}

      <NothingSelectedView />
      {/* <SelectedView /> */}

    </JournalLayout>
  )
}
