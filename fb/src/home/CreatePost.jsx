import {
  Image,
  Users,
  Smile
} from "lucide-react";
const PostAction = ({ icon, label }) => {
  return (
    <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium text-gray-600 w-full justify-center">
      {icon}
      {label}
    </button>
  );
};

const CreatePost = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-full max-w-2xl">

      {/* Top: Avatar + Input */}
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
        />
      </div>

      <hr className="my-3" />

      {/* Bottom Actions */}
      <div className="flex justify-between">
        <PostAction
          icon={<Image className="text-green-500" />}
          label="Photo/Video"
        />
        <PostAction
          icon={<Users className="text-blue-500" />}
          label="Tag Friends"
        />
        <PostAction
          icon={<Smile className="text-yellow-500" />}
          label="Feeling/Activity"
        />
      </div>
    </div>
  );
};

export default CreatePost;
