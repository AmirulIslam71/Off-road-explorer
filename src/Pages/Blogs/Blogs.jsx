import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="container mx-auto mt-2 bg-slate-200 rounded-2xl mb-4">
      <h1 className="text-center text-2xl text-pink-950 p-4">
        Some Questions Answer is define in own ideas
      </h1>
      <div className="p-4">
        <div className="bg-white rounded-xl shadow-xl p-4 mb-4">
          <p className="text-2xl text-pink-950">
            <span className="border-2 bg-red-400 p-1 rounded-full">1</span> What
            is an access token and refresh token? How do they work and where
            should we store them on the client-side?
          </p>
          <p>
            <span className="text-xl text-pink-700">Answer:</span>
            An access token and refresh token are commonly used in
            authentication systems.
            <br />
            <ol>
              <span className="font-bold">Access Token:</span> An access token
              is a credential that is issued by an authentication server to
              authorize and authenticate a user. It grants access to protected
              resources on the server. Access tokens are typically short-lived
              and have an expiration time.
            </ol>
            <ol>
              <span className="font-bold">Refresh Token: </span>A refresh token
              is a long-lived credential that is also issued by the
              authentication server. It is used to obtain a new access token
              when the current one expires. Refresh tokens are securely stored
              and are not accessible to client-side code.
            </ol>
            <span className="font-bold">Here is how they work together:</span>
            <li>
              When a user logs in or authenticates, the authentication server
              generates an access token and a refresh token.
            </li>
            <li>
              The access token is sent to the client-side and included in each
              request to access protected resources.
            </li>
            <li>
              The server verifies the access token for each request and grants
              access if it is valid and has not expired.
            </li>
            <li>
              When the access token expires, the client can use the refresh
              token to request a new access token from the authentication
              server.
            </li>
            <li>
              The server verifies the refresh token and issues a new access
              token if it is valid.
            </li>
            <li>
              The client receives the new access token and continues making
              requests with the refreshed token.
            </li>
            <span className="font-bold">
              To store these tokens on the client-side:
            </span>
            <li>
              Access Token: Store the access token securely on the client-side,
              typically in memory or a browsers storage mechanism such as
              localStorage or sessionStorage. Use secure practices to prevent
              unauthorized access to the token.
            </li>
            <li>
              Refresh Token: Store the refresh token securely on the
              server-side. It should not be accessible to client-side code. The
              server handles the refresh token and uses it to issue new access
              tokens when needed.
            </li>
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-xl p-4 mb-4">
          <p className="text-2xl text-pink-950">
            <span className="border-2 bg-red-400 p-1 rounded-full">2</span> How
            to works useEffect ?
          </p>
          <p>
            <span className="text-xl text-pink-700">Answer:</span>
            SQL (Structured Query Language) and NoSQL (Not Only SQL) databases
            differ in several aspects. SQL databases use a structured data model
            based on tables with predefined schemas, while NoSQL databases offer
            various data models such as key-value, document, columnar, or graph.
            SQL databases are vertically scalable, allowing for increased
            workload by upgrading server hardware, while NoSQL databases are
            horizontally scalable, distributing data across multiple servers for
            greater scalability. SQL databases use a standardized query language
            (SQL) with rich features for complex queries and data manipulation,
            while NoSQL databases have their query languages specific to their
            data models, which may not be as feature-rich. SQL databases have a
            rigid schema that requires predefined structures and data types,
            while NoSQL databases offer schema flexibility, allowing for dynamic
            changes without migrations. SQL databases provide ACID transactions
            for data integrity, while NoSQL databases may sacrifice ACID
            properties for better scalability and performance. Understanding
            these differences helps in choosing the appropriate database
            solution based on specific requirements and use cases.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-xl p-4 mb-4">
          <p className="text-2xl text-pink-950">
            <span className="border-2 bg-red-400 p-1 rounded-full">3</span> What
            is express js?
          </p>
          <p>
            <span className="text-xl text-pink-700">Answer:</span>
            Express.js is a lightweight and flexible web application framework
            for Node.js. It simplifies the process of building web applications
            and APIs by providing a minimalistic set of features. With
            Express.js, developers can handle HTTP requests, define routes,
            integrate middleware, and serve static files easily. It has a large
            and active community, making it popular and well-supported.
            Express.js allows developers to quickly create server-side
            applications with less overhead and boilerplate code.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-xl p-4 mb-4">
          <p className="text-2xl text-pink-950">
            <span className="border-2 bg-red-400 p-1 rounded-full">4</span> What
            is Nest JS
          </p>
          <p>
            <span className="text-xl text-pink-700">Answer:</span>
            NestJS is a progressive, opinionated Node.js framework used for
            building efficient, scalable, and maintainable server-side
            applications. It is inspired by Angular and leverages TypeScript,
            providing a strong architectural approach for developing
            enterprise-grade applications. NestJS promotes modularity,
            dependency injection, and the use of decorators to create reusable
            and testable modules. It offers built-in features such as routing,
            middleware, database integration, authentication, and more. NestJS
            provides a solid foundation for building complex server-side
            applications with a focus on code maintainability and scalability.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-xl p-4 mb-4">
          <p className="text-2xl text-pink-950">
            <span className="border-2 bg-red-400 p-1 rounded-full">5</span> What
            is MongoDB aggregate and how does it work?
          </p>
          <p>
            <span className="text-xl text-pink-700">Answer:</span>
            MongoDB is aggregate is a method used for performing advanced data
            aggregation operations on collections. It allows you to process and
            analyze data using a pipeline of stages. Each stage performs a
            specific operation on the input documents and passes the results to
            the next stage. You can use stages like $match for filtering, $group
            for grouping, $sort for sorting, $project for shaping the output,
            and more. MongoDB is aggregation pipeline allows for data
            transformation, calculations, and aggregations to be performed
            efficiently and flexibly. The pipeline is defined as an array of
            stages, executed in order, and the results are returned as a cursor
            or an array.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
