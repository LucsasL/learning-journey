// Dynamic Routes

// Dynamic routes in Next.js refer to a feature that allows you to create web pages with variable or dynamic parts in the URL. Instead of defining individual routes for every possible URL, you can create a single route pattern that matches a variety of dynamic values. This is extremely useful when you have pages that share a common structure but differ based on specific information in the URL.

// https://localhost:3000/users/alex
// https://localhost:3000/users/john
// https://localhost:3000/users/irineu

// Without Dynamic Route:

// /user
//   /alex
//   /john
//   /irineu

// With Dynamic Route:

// /user
//   [allusers]
//     "use client"
//     
//     const AllUsers = ({ params }) => {
//       // console.log(params);
//       return (
//         <div>
//           <p>Hello {params.student}</p>
//         </div>
//       );
//     }

// export default AllUsers;