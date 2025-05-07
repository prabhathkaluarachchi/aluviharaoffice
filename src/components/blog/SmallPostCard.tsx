import { BlogPostType } from '../../types';

interface SmallPostCardProps {
  post: BlogPostType;
}

const SmallPostCard = ({ post }: SmallPostCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 h-full flex flex-col">
      {/* Image at top - fixed height */}
      <div className="w-full h-48 overflow-hidden flex-shrink-0">
        <img
          src={`/blog-images/${post.id}.jpg`}
          alt={post.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/img/temple.jpg';
          }}
        />
      </div>

      {/* Content - flexible height */}
      <div className="p-4 flex-grow flex flex-col">
        {/* Title */}
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
        
        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
        
        {/* Footer - pushed to bottom */}
        <div className="mt-auto pt-4">
          <div className="flex justify-between items-center">
            <button className="text-[#EBB23E] text-sm hover:text-[#4B4B4B] font-medium">
              Read More →
            </button>
            <span className="text-xs text-[#4B4B4B]">Author: {post.author}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallPostCard;










// import { BlogPostType } from '../../types';

// interface SmallPostCardProps {
//   post: BlogPostType;
// }

// const SmallPostCard = ({ post }: SmallPostCardProps) => {
//   return (
//     <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
//       {/* Image at top */}
//       <div className="w-full h-48 overflow-hidden">
//         <img
//           src={`/blog-images/${post.id}.jpg`}
//           alt={post.title}
//           className="w-full h-full object-cover"
//           onError={(e) => {
//             (e.target as HTMLImageElement).src = '/img/temple.jpg';
//           }}
//         />
//       </div>

//       {/* Content */}
//       <div className="p-4">
//         {/* Title */}
//         <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
        
//         {/* Excerpt */}
//         <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
        
//         {/* Author credit at bottom right */}
//         <div className="flex justify-between items-center">
//           <button className="text-blue-600 text-sm hover:text-blue-800 font-medium">
//             Read More →
//           </button>
//           <span className="text-xs text-gray-500">Author: {post.author}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SmallPostCard;