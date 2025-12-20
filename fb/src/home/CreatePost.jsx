import { useState } from "react";
import { Image, Users, Smile } from "lucide-react";

import {
  Modal,
  Box,
  Typography,
  Avatar,
  IconButton,
  TextField,
  Button,
  Select,
  MenuItem,
  Divider
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ImageIcon from "@mui/icons-material/Image";
import GroupIcon from "@mui/icons-material/Group";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import GifIcon from "@mui/icons-material/Gif";
import VideocamIcon from "@mui/icons-material/Videocam";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 420,
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
};

const PostAction = ({ icon, label }) => (
  <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium text-gray-600 w-full justify-center">
    {icon}
    {label}
  </button>
);

const CreatePost = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* ===== MODAL ===== */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {/* Header */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
            p={2}
          >
            <Typography fontWeight={600}>Create post</Typography>
            <IconButton
              onClick={handleClose}
              sx={{ position: "absolute", right: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />

          {/* Body */}
          <Box p={2}>
            {/* User Info */}
            <Box display="flex" gap={2} mb={2}>
              <Avatar src="https://i.pravatar.cc/40" />
              <Box>
                <Typography fontWeight={600}>Josephine</Typography>
                <Select size="small" defaultValue="Friends">
                  <MenuItem value="Friends">Friends</MenuItem>
                  <MenuItem value="Public">Public</MenuItem>
                  <MenuItem value="Only me">Only me</MenuItem>
                </Select>
              </Box>
            </Box>

            {/* Text Area */}
            <TextField
              placeholder="What's on your mind?"
              multiline
              rows={3}
              fullWidth
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{ mb: 2 }}
            />

            {/* Add to post */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              border="1px solid #ddd"
              borderRadius={2}
              p={1.5}
              mb={2}
            >
              <Typography fontWeight={600}>Add to your post</Typography>
              <Box>
                <IconButton color="success"><ImageIcon /></IconButton>
                <IconButton color="primary"><GroupIcon /></IconButton>
                <IconButton color="warning"><EmojiEmotionsIcon /></IconButton>
                <IconButton color="secondary"><GifIcon /></IconButton>
                <IconButton color="error"><VideocamIcon /></IconButton>
              </Box>
            </Box>

            {/* Post Button */}
            <Button variant="contained" fullWidth>
              Post
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* ===== CREATE POST CARD ===== */}
      <div className="bg-white rounded-lg shadow p-4 w-full max-w-2xl">
        {/* Top */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />

          <input
            type="text"
            placeholder="What's on your mind, Josephine?"
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm outline-none hover:bg-gray-200 cursor-pointer"
            readOnly
            onClick={handleOpen}
          />
        </div>

        <hr className="my-3" />

        {/* Bottom Actions */}
        <div className="flex justify-between">
          <PostAction icon={<Image className="text-green-500" />} label="Photo/Video" />
          <PostAction icon={<Users className="text-blue-500" />} label="Tag Friends" />
          <PostAction icon={<Smile className="text-yellow-500" />} label="Feeling/Activity" />
        </div>
      </div>
    </>
  );
};

export default CreatePost;
