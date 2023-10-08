import { IconButton, Typography } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"

import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView, NoteView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis praesentium blanditiis labore minima excepturi tempora deserunt minus ducimus quos similique, distinctio, fugit fugiat aut quae aspernatur quaerat ea dolores iusto.</Typography> */}

      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color:'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>

    </JournalLayout>
  )
}
