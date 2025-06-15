import React from "react";
import TarjetaPersona from "./TarjetaPersona";

function DetallePersona({ persona, onVolver }) {
  if (!persona) return null;
  return (
    <div>
      <TarjetaPersona persona={persona} />
      <button onClick={onVolver}>Volver al listado</button>
    </div>
  );
}

export default DetallePersona;


// import React from "react";
// import TarjetaPersona from "./TarjetaPersona";


// function DetallePersona({ persona, onVolver }) {
//   return (
//     <div style={{ 
//       border: "1px solid #e3e8ef", 
//       borderRadius: 16, 
//       padding: 32, 
//       margin: 16,
//       backgroundColor: "#ffffff",
//       boxShadow: "0 8px 32px rgba(0, 123, 255, 0.12)",
//       transition: "all 0.3s ease",
//       position: "relative",
//       overflow: "hidden"
//     }}
//     onMouseEnter={(e) => {
//       e.currentTarget.style.transform = "translateY(-4px)";
//       e.currentTarget.style.boxShadow = "0 12px 48px rgba(0, 123, 255, 0.18)";
//     }}
//     onMouseLeave={(e) => {
//       e.currentTarget.style.transform = "translateY(0)";
//       e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 123, 255, 0.12)";
//     }}>
      
//       {/* Decorative gradient background */}
//       <div style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         right: 0,
//         height: 4,
//         background: "linear-gradient(90deg, #007bff, #6610f2, #e83e8c)",
//       }} />
      
//       {/* Avatar placeholder */}
//       <div style={{
//         width: 64,
//         height: 64,
//         borderRadius: "50%",
//         backgroundColor: "#007bff",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         color: "white",
//         fontSize: 24,
//         fontWeight: "bold",
//         marginBottom: 20,
//         background: "linear-gradient(135deg, #007bff, #0056b3)"
//       }}>
//         {persona.nombre.charAt(0)}{persona.apellido.charAt(0)}
//       </div>
      
//       <h2 style={{ 
//         color: "#2c3e50", 
//         marginBottom: 20, 
//         fontSize: 24,
//         fontWeight: "600",
//         letterSpacing: "-0.5px"
//       }}>
//         {persona.nombre} {persona.apellido}
//       </h2>
      
//       <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//         <div style={{ 
//           display: "flex", 
//           alignItems: "center", 
//           gap: 12,
//           padding: "12px 16px",
//           backgroundColor: "#f8f9fa",
//           borderRadius: 12,
//           border: "1px solid #e9ecef"
//         }}>
//           <div style={{
//             width: 32,
//             height: 32,
//             borderRadius: "50%",
//             backgroundColor: "#28a745",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             color: "white",
//             fontSize: 14,
//             fontWeight: "bold"
//           }}>
//             {persona.edad}
//           </div>
//           <div>
//             <span style={{ color: "#6c757d", fontSize: 14, fontWeight: "500" }}>Edad</span>
//             <p style={{ margin: 0, color: "#2c3e50", fontWeight: "600" }}>{persona.edad} años</p>
//           </div>
//         </div>
        
//         <div style={{ 
//           display: "flex", 
//           alignItems: "center", 
//           gap: 12,
//           padding: "12px 16px",
//           backgroundColor: "#f8f9fa",
//           borderRadius: 12,
//           border: "1px solid #e9ecef"
//         }}>
//           <div style={{
//             width: 32,
//             height: 32,
//             borderRadius: "50%",
//             backgroundColor: "#dc3545",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             color: "white",
//             fontSize: 16,
//             fontWeight: "bold"
//           }}>
//             @
//           </div>
//           <div style={{ flex: 1 }}>
//             <span style={{ color: "#6c757d", fontSize: 14, fontWeight: "500" }}>Email</span>
//             <p style={{ 
//               margin: 0, 
//               color: "#007bff", 
//               fontWeight: "500",
//               textDecoration: "none",
//               cursor: "pointer"
//             }}
//             onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
//             onMouseLeave={(e) => e.target.style.textDecoration = "none"}>
//               {persona.email}
//             </p>
//           </div>
//         </div>
//       </div>
      
//       {/* Subtle pattern background */}
//       <div style={{
//         position: "absolute",
//         top: -50,
//         right: -50,
//         width: 100,
//         height: 100,
//         borderRadius: "50%",
//         backgroundColor: "rgba(0, 123, 255, 0.03)",
//         zIndex: 0
//       }} />
      
//       <button
//         style={{
//           marginTop: 24,
//           padding: "8px 20px",
//           borderRadius: 8,
//           border: "none",
//           background: "#007bff",
//           color: "#fff",
//           fontWeight: "bold",
//           cursor: "pointer"
//         }}
//         onClick={onVolver}
//       >
//         Volver al listado
//       </button>
//     </div>
//   );
// }

// export default DetallePersona;