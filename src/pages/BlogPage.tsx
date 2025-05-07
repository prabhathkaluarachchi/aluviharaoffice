import { useState } from "react";
import SearchBar from "../components/blog/SearchBar";
import BlogPost from "../components/blog/BlogPost";
import RecentPostsSidebar from "../components/blog/RecentPostsSidebar";
import SmallPostCard from "../components/blog/SmallPostCard";
import LoadMoreButton from "../components/blog/LoadMoreButton";
import { BlogPostType } from "../types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import Swal from "sweetalert2";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(4);
  const [isSearchTriggered, setIsSearchTriggered] = useState(false);

  // Mock data
  const featuredPost: BlogPostType = {
    id: "1",
    title: "The Revival of Buddhism by King Walagamba",
    excerpt:
      "In the last century BCE, King Walagamba stands as a symbol of resilience and devotion among Buddhist rulers, embodying the unwavering commitment to preserving the sacred traditions of the Dhamma. During a time of political upheaval and foreign invasions, he not only fought to reclaim his rightful throne but also took monumental steps to safeguard Buddhism for future generations. His most enduring legacy was the formal transcription of the oral Buddhist teachings — the Tripitaka — into written form, ensuring their survival against the tide of uncertainty. Through his efforts, Sri Lanka became a stronghold of Theravāda Buddhism, and his reign is remembered not merely for its political achievements, but for the spiritual foresight that continues to shape the island’s religious and cultural identity.",
    content: "Full content here...",
    author: "Sumangala Thero",
    date: "05/05/2025",
  };

  const smallPosts: BlogPostType[] = [
    {
      id: "4",
      title: "Yokohi Provident™ in Abrukhara",
      excerpt:
        "Based on the name used in Arabic, Abraham Temple also reminds us of the Buddhist history...",
      content: "Full content here...",
      author: "John Eisenriegl",
      date: "March 2023",
    },
    // Add at least 4 more posts to demonstrate load more functionality
    {
      id: "5",
      title: "Ancient Buddhist Manuscripts",
      excerpt:
        "Exploring the preservation techniques of ancient palm leaf manuscripts...",
      content: "Full content here...",
      author: "Sarah Johnson",
      date: "February 2023",
    },
    {
      id: "6",
      title: "Meditation Techniques",
      excerpt: "Traditional meditation methods practiced for centuries...",
      content: "Full content here...",
      author: "Michael Chen",
      date: "January 2023",
    },
    {
      id: "7",
      title: "Temple Architecture",
      excerpt:
        "The symbolic meaning behind traditional Buddhist temple designs...",
      content: "Full content here...",
      author: "Priya Patel",
      date: "December 2022",
    },
    {
      id: "8",
      title: "Buddhist Festivals",
      excerpt: "Annual celebrations and their spiritual significance...",
      content: "Full content here...",
      author: "David Wilson",
      date: "November 2022",
    },
  ];

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisiblePosts((prev) => prev + 4);
      setIsLoading(false);
    }, 1000);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleSearchButtonClick = () => {
    setIsSearchTriggered(true);
  
    const swalOptions = {
      confirmButtonText: "OK",
      customClass: {
        confirmButton:
          "bg-[#181415] text-[#EBB23E] text-[18px] rounded-[10px] px-6 py-2 hover:opacity-80 transition duration-300",
      },
      buttonsStyling: false,
    };
  
    if (searchQuery.trim() === "") {
      Swal.fire({
        title: "Please enter a search term",
        icon: "warning",
        ...swalOptions,
      });
    } else if (filteredPosts.length > 0) {
      Swal.fire({
        title: "All blogs are found",
        icon: "success",
        ...swalOptions,
      });
    } else {
      Swal.fire({
        title:
          window.innerWidth < 768
            ? '<span class="text-[14px] ">No matching posts found</span>'
            : "No matching posts found",
        icon: "error",
        ...swalOptions,
      });
    }
  }; 

  const filteredPosts = smallPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <BlogHero />

      <main className="flex-grow container mx-auto px-4 py-8 relative overflow-hidden">
        <div className="mb-10 mt-20">
        <h1 className="text-[36px] text-[#373737] mb-4 font-[500]">

            Find Valuable Blogs Here,
          </h1>
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={(query) => {
              handleSearch(query); // live search update
            }}
            onSearchSubmit={handleSearchButtonClick} // triggers SweetAlert
          />
        </div>

        {/* Show search results live while typing */}
        {searchQuery ? (
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Search Results:
            </h2>
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="h-full">
                    <SmallPostCard post={post} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[#EBB23E]">No matching posts found.</p>
            )}
          </div>
        ) : (
          <>
            {/* Featured and Sidebar */}
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <BlogPost post={featuredPost} />
              </div>
              <div className="lg:w-1/3">
                <RecentPostsSidebar posts={smallPosts.slice(0, 3)} />
              </div>
            </div>

            {/* More Articles Section */}
            <section className="mt-16 relative">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/3 bg-transparent bg-opacity-90 rounded-lg p-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      More Articles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {smallPosts.slice(0, visiblePosts).map((post) => (
                        <SmallPostCard key={post.id} post={post} />
                      ))}
                    </div>

                    {visiblePosts < smallPosts.length && (
                      <LoadMoreButton
                        onClick={handleLoadMore}
                        isLoading={isLoading}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div
                className="absolute right-0 top-0 h-full w-1/2 max-w-3xl z-[-1] hidden sm:block pointer-events-none"
                style={{
                  transform: "translateX(10%) scale(1.4)",
                }}
              >
                <img
                  src="/images/blog-side-image.png"
                  alt="Buddhist Art"
                  className="w-full h-full object-contain opacity-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/img/test.png";
                  }}
                />
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
