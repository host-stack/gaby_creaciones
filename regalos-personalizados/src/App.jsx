
import { useEffect, useRef, useState } from "react";
import "./App.css";

// ==========================================
// CONFIGURACIÓN DE WHATSAPP
// ==========================================

const NUMERO_WHATSAPP = "595991183571";

// ==========================================
// CATEGORÍAS PRINCIPALES
// ==========================================

const categorias = [
  {
    id: "tazas",
    nombre: "Tazas personalizadas",
    descripcion: "Diseños únicos para regalar o disfrutar cada día.",
    imagen: "/productos/taza.jpg",
    boton: "Ver tipos de tazas"
  },
  {
    id: "remeras",
    nombre: "Remeras personalizadas",
    descripcion: "Remeras sublimadas con diseños para cada ocasión.",
    imagen: "/productos/remera.jpg",
    boton: "Ver tipos de remeras"
  },
  {
    id: "llaveros",
    nombre: "Llaveros personalizados",
    descripcion: "Pequeños detalles que guardan grandes recuerdos.",
    imagen: "/productos/llavero.jpg",
    boton: "Ver modelos de llaveros"
  },
  {
    id: "regalos",
    nombre: "Regalos especiales",
    descripcion: "Cuadros, cajas decoradas y ramos personalizados.",
    imagen: "/productos/regalo.jpg",
    boton: "Ver regalos especiales"
  },
  {
    id: "carpetas",
    nombre: "Carpetas decoradas",
    descripcion: "Carpetas escolares y trabajos personalizados.",
    imagen: "/productos/carpeta.jpg",
    boton: "Ver carpetas decoradas"
  },
  {
    id: "toallitas",
    nombre: "Toallitas personalizadas",
    descripcion:
      "Toallitas personalizadas con nombres, fotografías y diseños especiales.",
    imagen: "/productos/toallitas.jpg",
    boton: "Ver modelos de toallitas"
  }
];

// ==========================================
// PRODUCTOS DEL CATÁLOGO
// ==========================================

const secciones = {
  // TAZAS

  tazas: {
    titulo: "Nuestros tipos de tazas",
    descripcion:
      "Descubrí nuestras opciones de tazas personalizadas.",
    productos: [
      {
        id: "t1",
        nombre: "Tazas sublimadas",
        descripcion:
          "Con fotografías, nombres y diseños personalizados.",
        imagen: "/productos/tazas sublimadas.jpg"
      },
      {
        id: "t2",
        nombre: "Tazas mágicas",
        descripcion:
          "Revelan su diseño con bebidas calientes.",
        imagen: "/productos/taza mágica.jpg"
      },
      {
        id: "t3",
        nombre: "Tazas con manija de corazón",
        descripcion:
          "Un detalle especial para regalar.",
        imagen: "/productos/taza manija de corazón.jpg"
      },
      {
        id: "t4",
        nombre: "Tazas con glitter",
        descripcion:
          "Diseños con un acabado brillante.",
        imagen: "/productos/taza con glitter.jpg"
      },
      {
        id: "t5",
        nombre: "Tazas con bordes dorados",
        descripcion:
          "Tazas elegantes con detalles dorados.",
        imagen: "/productos/taza con borde dorado.jpg"
      },
      {
        id: "t6",
        nombre: "Tazas Arenadas",
        descripcion:
          "Tazas con acabado arenado disponibles en diferentes colores.",
        imagen: "/productos/tazas arenadas.jpg",
        subcategoria: "arenadas"
      }
    ]
  },

  // COLORES DE TAZAS ARENADAS

  arenadas: {
    titulo: "Colores de Tazas Arenadas",
    descripcion:
      "Elegí tu color favorito entre nuestros siete colores de tazas arenadas.",
    productos: [
      {
        id: "a1",
        nombre: "Taza Arenada - Sin color",
        descripcion: "Acabado esmerilado translúcido, sin color.",
        imagen: "/productos/taza arenada1.jpg"
      },
      {
        id: "a2",
        nombre: "Taza Arenada - Verde lima",
        descripcion: "Acabado arenado en verde lima.",
        imagen: "/productos/taza arenada2.jpg"
      },
      {
        id: "a3",
        nombre: "Taza Arenada - Naranja",
        descripcion: "Acabado arenado en naranja.",
        imagen: "/productos/taza arenada3.jpg"
      },
      {
        id: "a4",
        nombre: "Taza Arenada - Rosa",
        descripcion: "Acabado arenado en rosa.",
        imagen: "/productos/taza arenada4.jpg"
      },
      {
        id: "a5",
        nombre: "Taza Arenada - Verde",
        descripcion: "Acabado arenado en verde.",
        imagen: "/productos/taza arenada5.jpg"
      },
      {
        id: "a6",
        nombre: "Taza Arenada - Coral",
        descripcion: "Acabado arenado en coral.",
        imagen: "/productos/taza arenada6.jpg"
      },
      {
        id: "a7",
        nombre: "Taza Arenada - Lila",
        descripcion: "Acabado arenado en lila.",
        imagen: "/productos/taza arenada7.jpg"
      }
    ]
  },

  // REMERAS
  // EL COLLAGE YA NO ESTÁ AQUÍ

  remeras: {
    titulo: "Remeras personalizadas",
    descripcion:
      "Conocé nuestros modelos de remeras personalizadas.",
    productos: [
      {
        id: "r1",
        nombre: "Remeras sublimadas blancas",
        descripcion: "Remeras blancas con diseños personalizados.",
        imagen: "/productos/remera blanca sublimada.jpg"
      },
      {
        id: "r2",
        nombre: "Remeras sublimadas de colores",
        descripcion: "Remeras de colores con diseños especiales.",
        imagen: "/productos/remera de colores.jpg"
      }
    ]
  },

  // LLAVEROS

  llaveros: {
    titulo: "Llaveros personalizados",
    descripcion: "Pequeños detalles para grandes momentos.",
    productos: [
      {
        id: "l1",
        nombre: "Llavero personalizado - Modelo 1",
        descripcion: "Diseños especiales para cada ocasión.",
        imagen: "/productos/llavero.jpg"
      },
      {
        id: "l2",
        nombre: "Llavero personalizado - Modelo 2",
        descripcion: "Recuerdos personalizados.",
        imagen: "/productos/llavero2.jpg"
      },
      {
        id: "l3",
        nombre: "Llavero personalizado - Modelo 3",
        descripcion: "Detalles únicos para regalar.",
        imagen: "/productos/llavero3.jpg"
      },
      {
        id: "l4",
        nombre: "Llavero personalizado - Modelo 4",
        descripcion: "Diseños originales para momentos especiales.",
        imagen: "/productos/llavero4.jpg"
      },
      {
        id: "l5",
        nombre: "Llavero personalizado - Modelo 5",
        descripcion: "Llaveros para cumpleaños y celebraciones.",
        imagen: "/productos/llavero5.jpg"
      }
    ]
  },

  // REGALOS

  regalos: {
    titulo: "Regalos especiales",
    descripcion: "Detalles creados para sorprender.",
    productos: [
      {
        id: "g1",
        nombre: "Cuadro 3D personalizado",
        descripcion: "Cuadros decorativos tridimensionales.",
        imagen: "/productos/cuadro 3d.jpg"
      },
      {
        id: "g2",
        nombre: "Cuadro personalizado con auto",
        descripcion: "Cuadros con diseños de autos.",
        imagen: "/productos/cuadro con auto.jpg"
      },
      {
        id: "g3",
        nombre: "Cuadro de fotos personalizado",
        descripcion: "Conservá tus mejores recuerdos.",
        imagen: "/productos/cuadro de fotos.jpg"
      },
      {
        id: "g4",
        nombre: "Caja decorada personalizada",
        descripcion: "Cajas preparadas para regalos especiales.",
        imagen: "/productos/caja decorada.jpg"
      },
      {
        id: "g5",
        nombre: "Ramo personalizado - Modelo 1",
        descripcion: "Ramos decorativos para sorprender.",
        imagen: "/productos/ramo 1.jpg"
      },
      {
        id: "g6",
        nombre: "Ramo personalizado - Modelo 2",
        descripcion: "Ramos artesanales con detalles especiales.",
        imagen: "/productos/ramo 2.jpg"
      },
      {
        id: "g7",
        nombre: "Ramo personalizado - Modelo 3",
        descripcion: "Un regalo para momentos inolvidables.",
        imagen: "/productos/ramo 3.jpg"
      }
    ]
  },

  // CARPETAS

  carpetas: {
    titulo: "Carpetas decoradas",
    descripcion:
      "Conocé nuestros modelos escolares y personalizados.",
    productos: [
      {
        id: "c0",
        nombre: "Carpetas decoradas - Varios diseños",
        descripcion: "Distintas temáticas y colores para tus trabajos.",
        imagen: "/productos/carpeta.jpg"
      },
      {
        id: "c1",
        nombre: "Carpeta decorada - Paraguay",
        descripcion: "Modelo inspirado en los símbolos del Paraguay.",
        imagen: "/productos/carpeta1.jpg"
      },
      {
        id: "c2",
        nombre: "Carpeta decorada - La democracia",
        descripcion: "Diseño escolar con temática de la democracia.",
        imagen: "/productos/carpeta2.jpg"
      },
      {
        id: "c3",
        nombre: "Carpeta decorada - Autores paraguayos",
        descripcion: "Diseño dedicado a la literatura paraguaya.",
        imagen: "/productos/carpeta3.jpg"
      },
      {
        id: "c4",
        nombre: "Carpeta decorada - Análisis del cuento",
        descripcion: "Diseño inspirado en La mano en la tierra.",
        imagen: "/productos/carpeta4.jpg"
      }
    ]
  },

  // TOALLITAS

  toallitas: {
    titulo: "Toallitas personalizadas",
    descripcion:
      "Conocé nuestros diseños de toallitas personalizadas para recuerdos, celebraciones, regalos y ocasiones especiales.",
    productos: [
      {
        id: "tp1",
        nombre: "Toallitas con nombre y fotografía",
        descripcion:
          "Toallitas personalizadas con fotografías, nombres y colores a elección.",
        imagen: "/productos/toallita1.png"
      },
      {
        id: "tp2",
        nombre: "Toallitas de Pascua",
        descripcion: "Diseños personalizados para celebrar la Pascua.",
        imagen: "/productos/toallita2.png"
      },
      {
        id: "tp3",
        nombre: "Toallitas para profesoras",
        descripcion:
          "Toallitas con nombres y diseños especiales para docentes.",
        imagen: "/productos/toallita3.png"
      },
      {
        id: "tp4",
        nombre: "Toallitas infantiles",
        descripcion:
          "Toallitas infantiles personalizadas con nombres y personajes.",
        imagen: "/productos/toallita4.png"
      },
      {
        id: "tp5",
        nombre: "Toallitas para eventos",
        descripcion:
          "Recuerdos personalizados para celebraciones y fechas especiales.",
        imagen: "/productos/toallita5.png"
      }
    ]
  }
};

// ==========================================
// NUESTRA GALERÍA DE TRABAJOS
// INDEPENDIENTE DEL CATÁLOGO
// ==========================================

const trabajosRealizados = {
  remeras: [
    {
      id: "trabajo-r1",
      nombre: "Remeras para ferias pedagógicas",
      descripcion:
        "Una muestra de nuestros diseños personalizados para actividades y proyectos escolares.",
      imagen: "/productos/collage remeras.jpg",
      esTrabajo: true
    }
  ],

  // AQUÍ AGREGAREMOS LAS FOTOS DE TAZAS
  // CUANDO ESTÉN PREPARADAS

  tazas: []
};

// ==========================================
// BUSCADOR DE PRODUCTOS
// ==========================================

const listaParaBuscar = Object.entries(secciones).flatMap(
  ([categoria, datos]) =>
    datos.productos.map((producto) => ({
      ...producto,
      categoria
    }))
);

function normalizar(texto) {
  return String(texto)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

// ==========================================
// WHATSAPP
// ==========================================

function enlaceWhatsApp(nombreProducto = "") {
  const mensaje = nombreProducto
    ? `¡Hola! Vi ${nombreProducto} en el catálogo de Gaby Creaciones. Quisiera consultar el precio, la disponibilidad y las opciones de personalización.`
    : "¡Hola! Estuve viendo el catálogo de Gaby Creaciones y quisiera hacer una consulta sobre sus productos personalizados.";

  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}

function IconoWhatsApp() {
  return (
    <svg
      viewBox="0 0 32 32"
      width="27"
      height="27"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.004 2.67A13.3 13.3 0 0 0 4.52 22.68L2.67 29.33l6.82-1.79a13.3 13.3 0 1 0 6.51-24.87Zm0 24.18a10.83 10.83 0 0 1-5.5-1.5l-.4-.24-4.05 1.06 1.08-3.94-.26-.41a10.85 10.85 0 1 1 9.13 5.03Zm5.95-8.12c-.33-.17-1.93-.95-2.23-1.06-.3-.11-.52-.17-.74.17-.22.33-.85 1.06-1.04 1.28-.19.22-.38.25-.7.08-.33-.16-1.37-.5-2.61-1.61-.96-.86-1.61-1.92-1.8-2.25-.19-.33-.02-.5.14-.67.15-.15.33-.39.49-.58.17-.19.22-.33.33-.55.11-.22.06-.41-.03-.58-.08-.17-.74-1.79-1.02-2.45-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.41-.3.33-1.15 1.13-1.15 2.75s1.18 3.19 1.34 3.41c.17.22 2.32 3.54 5.62 4.97.79.34 1.4.54 1.88.69.79.25 1.5.22 2.07.13.63-.09 1.93-.79 2.2-1.55.27-.77.27-1.42.19-1.55-.08-.14-.3-.22-.63-.39Z" />
    </svg>
  );
}

function BotonWhatsApp({
  nombreProducto = "",
  children
}) {
  return (
    <a
      className="boton-consulta"
      href={enlaceWhatsApp(nombreProducto)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children || "Consultar por WhatsApp"}
    </a>
  );
}

function WhatsAppFlotante() {
  return (
    <a
      className="whatsapp-flotante"
      href={enlaceWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
    >
      <IconoWhatsApp />

      <span className="whatsapp-flotante-texto">
        Consultanos
      </span>
    </a>
  );
}

// ==========================================
// IMÁGENES AMPLIABLES
// ==========================================

function ImagenProducto({
  producto,
  abrirImagen
}) {
  const [imagenFallida, setImagenFallida] =
    useState(false);

  useEffect(() => {
    setImagenFallida(false);
  }, [producto.imagen]);

  return (
    <button
      type="button"
      className="boton-imagen"
      disabled={imagenFallida}
      onClick={() => abrirImagen(producto)}
      aria-label={`Ampliar fotografía de ${producto.nombre}`}
    >
      {imagenFallida ? (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            minHeight: 200,
            padding: 20,
            color: "#51372f",
            textAlign: "center",
            fontSize: 12
          }}
        >
          Fotografía no disponible
        </span>
      ) : (
        <>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            loading="lazy"
            onError={() => setImagenFallida(true)}
          />

          <span className="indicador-imagen">
            Ver fotografía
          </span>
        </>
      )}
    </button>
  );
}

// ==========================================
// TARJETAS DEL CATÁLOGO
// ==========================================

function TarjetaProducto({
  producto,
  abrirImagen,
  cambiarSeccion
}) {
  const tieneColores =
    producto.subcategoria === "arenadas";

  return (
    <article className="tarjeta">
      <ImagenProducto
        producto={producto}
        abrirImagen={abrirImagen}
      />

      <div className="tarjeta-contenido">
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>

        {tieneColores ? (
          <button
            type="button"
            className="boton-ver-tazas"
            onClick={() => cambiarSeccion("arenadas")}
          >
            Ver colores disponibles
          </button>
        ) : (
          <BotonWhatsApp
            nombreProducto={producto.nombre}
          />
        )}
      </div>
    </article>
  );
}

// ==========================================
// BUSCADOR
// ==========================================

function BuscadorProductos({
  busqueda,
  setBusqueda
}) {
  return (
    <div className="contenedor-buscador">
      <label
        htmlFor="buscar-productos"
        className="buscador-etiqueta"
      >
        ¿Qué producto estás buscando?
      </label>

      <div className="buscador-caja">
        <svg
          className="buscador-icono"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
        </svg>

        <input
          id="buscar-productos"
          type="search"
          autoComplete="off"
          placeholder="Buscar tazas, remeras, toallitas..."
          value={busqueda}
          onChange={(evento) =>
            setBusqueda(evento.target.value)
          }
        />

        {busqueda && (
          <button
            type="button"
            className="buscador-limpiar"
            onClick={() => setBusqueda("")}
          >
            Limpiar
          </button>
        )}
      </div>

      <p className="buscador-ayuda">
        También podés buscar por nombre, color o temática,
        como «toallitas», «Pascua» o «lila».
      </p>
    </div>
  );
}

// ==========================================
// NUEVA GALERÍA: NUESTROS TRABAJOS
// SIN BOTONES DE WHATSAPP
// ==========================================

function NuestrosTrabajos({ abrirImagen }) {
  const [categoriaActiva, setCategoriaActiva] =
    useState("remeras");

  const trabajos =
    trabajosRealizados[categoriaActiva] || [];

  return (
    <section
      id="nuestros-trabajos"
      className="nuestros-trabajos"
    >
      <div className="encabezado-seccion">
        <p className="etiqueta-seccion">
          HECHO CON DEDICACIÓN
        </p>

        <h2>Nuestros trabajos</h2>

        <p>
          Una pequeña muestra de nuestras creaciones
          realizadas con dedicación y cariño.
          Explorá nuestros diseños y encontrá
          inspiración para tu próxima idea.
        </p>
      </div>

      {/* FILTROS DE GALERÍA */}

      <div
        className="trabajos-filtros"
        aria-label="Categorías de trabajos"
      >
        <button
          type="button"
          className={`trabajos-filtro ${
            categoriaActiva === "remeras"
              ? "activo"
              : ""
          }`}
          aria-pressed={
            categoriaActiva === "remeras"
          }
          onClick={() =>
            setCategoriaActiva("remeras")
          }
        >
          Remeras
        </button>

        <button
          type="button"
          className={`trabajos-filtro ${
            categoriaActiva === "tazas"
              ? "activo"
              : ""
          }`}
          aria-pressed={
            categoriaActiva === "tazas"
          }
          onClick={() =>
            setCategoriaActiva("tazas")
          }
        >
          Tazas
        </button>
      </div>

      {/* FOTOGRAFÍAS */}

      {trabajos.length > 0 ? (
        <div className="trabajos-grid">
          {trabajos.map((trabajo) => (
            <article
              className="trabajo-card"
              key={trabajo.id}
            >
              <ImagenProducto
                producto={trabajo}
                abrirImagen={abrirImagen}
              />

              <div className="trabajo-contenido">
                <h3>{trabajo.nombre}</h3>

                <p>{trabajo.descripcion}</p>

                <span className="trabajo-etiqueta">
                  Trabajo realizado
                </span>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="trabajos-vacio">
          <h3>
            Próximamente, nuestros trabajos en tazas.
          </h3>

          <p>
            Estamos preparando fotografías de nuestras
            tazas personalizadas para compartirlas aquí.
          </p>
        </div>
      )}

      <p className="trabajos-nota">
        Imágenes de trabajos realizados.
        Los diseños son ejemplos de personalización.
      </p>
    </section>
  );
}

// ==========================================
// CÓMO TRABAJAMOS
// ==========================================

function ComoTrabajamos() {
  const pasos = [
    {
      numero: "01",
      titulo: "Explorá el catálogo",
      descripcion:
        "Descubrí nuestras tazas, remeras, llaveros, carpetas decoradas, toallitas y regalos especiales."
    },
    {
      numero: "02",
      titulo: "Elegí tu diseño favorito",
      descripcion:
        "Encontrá el modelo que más te guste y explorá las opciones de personalización."
    },
    {
      numero: "03",
      titulo: "Consultanos por WhatsApp",
      descripcion:
        "Escribinos para consultar precios, disponibilidad y opciones de personalización."
    }
  ];

  return (
    <section
      id="como-trabajamos"
      className="como-trabajamos"
    >
      <div className="encabezado-seccion">
        <p className="etiqueta-seccion">
          UNA EXPERIENCIA PERSONALIZADA
        </p>

        <h2>¿Cómo trabajamos?</h2>

        <p>
          Conocer nuestras creaciones y consultarnos
          por tu diseño favorito es muy sencillo.
        </p>
      </div>

      <div className="proceso-grid">
        {pasos.map((paso) => (
          <article
            className="proceso-card"
            key={paso.numero}
          >
            <span className="proceso-numero">
              {paso.numero}
            </span>

            <div className="proceso-linea" />

            <h3>{paso.titulo}</h3>
            <p>{paso.descripcion}</p>
          </article>
        ))}
      </div>

      <div className="proceso-final">
        <p>
          Cada detalle comienza con una idea.
          Nos encantará conocer la tuya.
        </p>

        <BotonWhatsApp>
          Hacer una consulta
        </BotonWhatsApp>
      </div>
    </section>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function App() {
  const [seccion, setSeccion] =
    useState("catalogo");

  const [busqueda, setBusqueda] =
    useState("");

  const [imagenAmpliada, setImagenAmpliada] =
    useState(null);

  const [menuAbierto, setMenuAbierto] =
    useState(false);

  const menuRef = useRef(null);
  const botonMenuRef = useRef(null);
  const botonCerrarRef = useRef(null);
  const focoAnterior = useRef(null);

  // ========================================
  // NAVEGACIÓN
  // ========================================

  function irA(id) {
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }

  function irAlInicio() {
    setSeccion("catalogo");
    setBusqueda("");
    setMenuAbierto(false);

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}#inicio`
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function cambiarSeccion(nuevaSeccion) {
    setSeccion(nuevaSeccion);
    setBusqueda("");
    setMenuAbierto(false);
    irA("productos");
  }

  function volverSeccion() {
    if (seccion === "arenadas") {
      cambiarSeccion("tazas");
    } else {
      cambiarSeccion("catalogo");
    }
  }

  function abrirImagen(producto) {
    focoAnterior.current = document.activeElement;
    setMenuAbierto(false);
    setImagenAmpliada(producto);
  }

  function cerrarImagen() {
    setImagenAmpliada(null);
  }

  // ========================================
  // MENÚ MÓVIL
  // ========================================

  useEffect(() => {
    if (!menuAbierto) return;

    function clickFuera(evento) {
      if (
        menuRef.current &&
        !menuRef.current.contains(evento.target)
      ) {
        setMenuAbierto(false);
      }
    }

    function teclas(evento) {
      if (evento.key === "Escape") {
        setMenuAbierto(false);
        botonMenuRef.current?.focus();
      }
    }

    function cambioAncho() {
      if (window.innerWidth > 850) {
        setMenuAbierto(false);
      }
    }

    document.addEventListener("pointerdown", clickFuera);
    document.addEventListener("keydown", teclas);
    window.addEventListener("resize", cambioAncho);

    return () => {
      document.removeEventListener(
        "pointerdown",
        clickFuera
      );
      document.removeEventListener(
        "keydown",
        teclas
      );
      window.removeEventListener(
        "resize",
        cambioAncho
      );
    };
  }, [menuAbierto]);

  // ========================================
  // VISOR DE IMÁGENES
  // ========================================

  useEffect(() => {
    if (!imagenAmpliada) return;

    const overflowAnterior =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    botonCerrarRef.current?.focus();

    function teclas(evento) {
      if (evento.key === "Escape") {
        cerrarImagen();
      }

      if (evento.key !== "Tab") return;

      const elementos = Array.from(
        document.querySelectorAll(
          ".visor-contenido button, .visor-contenido a[href]"
        )
      );

      if (!elementos.length) return;

      const primero = elementos[0];
      const ultimo = elementos[elementos.length - 1];

      if (
        evento.shiftKey &&
        document.activeElement === primero
      ) {
        evento.preventDefault();
        ultimo.focus();
      } else if (
        !evento.shiftKey &&
        document.activeElement === ultimo
      ) {
        evento.preventDefault();
        primero.focus();
      }
    }

    document.addEventListener("keydown", teclas);

    return () => {
      document.body.style.overflow = overflowAnterior;
      document.removeEventListener("keydown", teclas);

      if (focoAnterior.current?.isConnected) {
        focoAnterior.current.focus();
      }
    };
  }, [imagenAmpliada]);

  // ========================================
  // BUSCADOR
  // ========================================

  const texto = normalizar(busqueda);
  const buscando = texto.length > 0;

  const resultados = buscando
    ? listaParaBuscar.filter((producto) => {
        const categoria = categorias.find(
          (item) => item.id === producto.categoria
        );

        const nombreCategoria =
          producto.categoria === "arenadas"
            ? "Tazas personalizadas"
            : categoria?.nombre || "";

        const contenido = normalizar(
          `${producto.nombre} ${producto.descripcion} ${producto.categoria} ${nombreCategoria}`
        );

        return texto
          .split(/\s+/)
          .every((palabra) =>
            contenido.includes(palabra)
          );
      })
    : [];

  const datosSeccion = secciones[seccion];

  return (
    <div className="pagina">

      {/* ======================================
          ENCABEZADO
      ====================================== */}

      <header className="encabezado">
        <a
          className="marca"
          href="#inicio"
          onClick={(evento) => {
            evento.preventDefault();
            irAlInicio();
          }}
        >
          <span className="nombre-marca">
            Gaby Creaciones
          </span>

          <span className="descripcion-marca">
            REGALOS PERSONALIZADOS
          </span>
        </a>

        <div
          className="contenedor-menu"
          ref={menuRef}
        >
          <button
            ref={botonMenuRef}
            type="button"
            className={`boton-menu ${
              menuAbierto ? "activo" : ""
            }`}
            aria-expanded={menuAbierto}
            aria-controls="navegacion-principal"
            aria-label={
              menuAbierto
                ? "Cerrar menú"
                : "Abrir menú"
            }
            onClick={() =>
              setMenuAbierto(!menuAbierto)
            }
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="navegacion-principal"
            className={`menu-navegacion ${
              menuAbierto ? "abierto" : ""
            }`}
            aria-label="Navegación principal"
          >
            <a
              href="#inicio"
              onClick={(evento) => {
                evento.preventDefault();
                irAlInicio();
              }}
            >
              Inicio
            </a>

            <a
              href="#productos"
              onClick={(evento) => {
                evento.preventDefault();
                cambiarSeccion("catalogo");
              }}
            >
              Productos
            </a>

            {/* NUEVO ENLACE DEL MENÚ */}

            <a
              href="#nuestros-trabajos"
              onClick={() =>
                setMenuAbierto(false)
              }
            >
              Nuestros trabajos
            </a>

            <a
              href="#como-trabajamos"
              onClick={() =>
                setMenuAbierto(false)
              }
            >
              Cómo trabajamos
            </a>

            <a
              href="#nosotros"
              onClick={() =>
                setMenuAbierto(false)
              }
            >
              Nosotros
            </a>

            <a
              href="#contacto"
              onClick={() =>
                setMenuAbierto(false)
              }
            >
              Contacto
            </a>

            <a
              className="menu-contacto"
              href={enlaceWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                setMenuAbierto(false)
              }
            >
              Consultar por WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main>

        {/* ======================================
            PORTADA
        ====================================== */}

        <section
          id="inicio"
          className="inicio"
        >
          <div className="inicio-contenido">
            <p className="subtitulo">
              REGALOS Y DETALLES PERSONALIZADOS
            </p>

            <h1>
              Detalles únicos para
              <span> momentos especiales</span>
            </h1>

            <p className="texto-inicio">
              En Gaby Creaciones transformamos tus ideas
              en recuerdos especiales. Descubrí nuestras
              tazas, remeras, llaveros, carpetas decoradas,
              toallitas y regalos personalizados.
            </p>

            <div className="botones-inicio">
              <a
                href="#productos"
                className="boton"
                onClick={(evento) => {
                  evento.preventDefault();
                  cambiarSeccion("catalogo");
                }}
              >
                Explorar catálogo
              </a>

              <a
                href="#como-trabajamos"
                className="boton boton-secundario"
              >
                Cómo trabajamos
              </a>
            </div>

            <div className="mini-categorias">
              <span>Tazas</span>
              <span>Remeras</span>
              <span>Llaveros</span>
              <span>Regalos</span>
              <span>Carpetas</span>
              <span>Toallitas</span>
            </div>
          </div>
        </section>

        {/* ======================================
            NUESTRA ESENCIA
        ====================================== */}

        <section className="destacados">
          <div className="encabezado-seccion">
            <p className="etiqueta-seccion">
              NUESTRA ESENCIA
            </p>

            <h2>
              La esencia de Gaby Creaciones
            </h2>
          </div>

          <div className="destacados-grid">
            <article className="destacado-card">
              <span className="numero-destacado">
                01
              </span>

              <h3>
                Diseños con dedicación
              </h3>

              <p>
                Cada creación es preparada con cuidado,
                prestando atención a los pequeños detalles.
              </p>
            </article>

            <article className="destacado-card">
              <span className="numero-destacado">
                02
              </span>

              <h3>Personalización</h3>

              <p>
                Transformamos tus ideas en productos únicos,
                pensados especialmente para vos.
              </p>
            </article>

            <article className="destacado-card">
              <span className="numero-destacado">
                03
              </span>

              <h3>Momentos especiales</h3>

              <p>
                Creamos detalles para celebrar, agradecer
                y sorprender a las personas que más querés.
              </p>
            </article>
          </div>
        </section>

        {/* ======================================
            CATÁLOGO Y BUSCADOR
        ====================================== */}

        <section
          id="productos"
          className="productos"
        >
          <BuscadorProductos
            busqueda={busqueda}
            setBusqueda={setBusqueda}
          />

          {buscando ? (
            <>
              <div className="encabezado-seccion resultados-encabezado">
                <p className="etiqueta-seccion">
                  RESULTADOS DE BÚSQUEDA
                </p>

                <h2>
                  {resultados.length
                    ? "Productos encontrados"
                    : "No encontramos resultados"}
                </h2>

                <p aria-live="polite">
                  {resultados.length
                    ? `${resultados.length} ${
                        resultados.length === 1
                          ? "producto encontrado"
                          : "productos encontrados"
                      }`
                    : `No encontramos productos para «${busqueda}».`}
                </p>
              </div>

              {resultados.length ? (
                <div className="catalogo">
                  {resultados.map((producto) => (
                    <TarjetaProducto
                      key={`${producto.categoria}-${producto.id}`}
                      producto={producto}
                      abrirImagen={abrirImagen}
                      cambiarSeccion={cambiarSeccion}
                    />
                  ))}
                </div>
              ) : (
                <div className="sin-resultados">
                  <p>
                    Probá con «toallitas», «Pascua»,
                    «carpetas» o «tazas arenadas».
                  </p>

                  <button
                    className="boton-volver"
                    type="button"
                    onClick={() => setBusqueda("")}
                  >
                    Ver catálogo nuevamente
                  </button>
                </div>
              )}
            </>
          ) : seccion === "catalogo" ? (
            <>
              <div className="encabezado-seccion">
                <p className="etiqueta-seccion">
                  NUESTRA COLECCIÓN
                </p>

                <h2>Nuestro catálogo</h2>

                <p>
                  Encontrá el detalle perfecto para cada ocasión.
                </p>
              </div>

              <div className="catalogo">
                {categorias.map((categoria) => (
                  <article
                    className="tarjeta"
                    key={categoria.id}
                  >
                    <ImagenProducto
                      producto={{
                        ...categoria,
                        categoria: categoria.id,
                        esCategoria: true
                      }}
                      abrirImagen={abrirImagen}
                    />

                    <div className="tarjeta-contenido">
                      <h3>{categoria.nombre}</h3>
                      <p>{categoria.descripcion}</p>

                      <button
                        type="button"
                        className="boton-ver-tazas"
                        onClick={() =>
                          cambiarSeccion(categoria.id)
                        }
                      >
                        {categoria.boton}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </>
          ) : datosSeccion ? (
            <>
              <div className="encabezado-seccion">
                <p className="etiqueta-seccion">
                  NUESTRA COLECCIÓN
                </p>

                <h2>{datosSeccion.titulo}</h2>

                <p>{datosSeccion.descripcion}</p>
              </div>

              <button
                type="button"
                className="boton-volver"
                onClick={volverSeccion}
              >
                {seccion === "arenadas"
                  ? "Volver a tipos de tazas"
                  : "Volver al catálogo"}
              </button>

              <div className="catalogo">
                {datosSeccion.productos.map((producto) => (
                  <TarjetaProducto
                    key={producto.id}
                    producto={producto}
                    abrirImagen={abrirImagen}
                    cambiarSeccion={cambiarSeccion}
                  />
                ))}
              </div>
            </>
          ) : null}
        </section>

        {/* ======================================
            NUESTRA GALERÍA DE TRABAJOS
        ====================================== */}

        <NuestrosTrabajos
          abrirImagen={abrirImagen}
        />

        {/* ======================================
            CÓMO TRABAJAMOS
        ====================================== */}

        <ComoTrabajamos />

        {/* ======================================
            NOSOTROS
        ====================================== */}

        <section
          id="nosotros"
          className="informacion nosotros"
        >
          <p className="etiqueta-seccion">
            CONOCENOS
          </p>

          <h2>Sobre Gaby Creaciones</h2>

          <p>
            Nos dedicamos a crear artículos personalizados
            para acompañar momentos importantes.
            Cada trabajo nace de una idea y se transforma
            en un detalle especial.
          </p>
        </section>

        {/* ======================================
            CONTACTO
        ====================================== */}

        <section
          id="contacto"
          className="informacion contacto"
        >
          <p className="etiqueta-seccion">
            ESTAMOS PARA AYUDARTE
          </p>

          <h2>Hablemos de tu próximo regalo</h2>

          <p>
            ¿Tenés una idea en mente? Contanos qué te gustaría
            personalizar y te ayudamos a crear algo especial.
          </p>

          <BotonWhatsApp />
        </section>
      </main>

      {/* ======================================
          PIE DE PÁGINA
      ====================================== */}

      <footer>
        <h2>Gaby Creaciones</h2>

        <p>Regalos y detalles personalizados</p>

        <div className="linea-footer" />

        <p>
          © {new Date().getFullYear()} Gaby Creaciones.
          Todos los derechos reservados.
        </p>
      </footer>

      <WhatsAppFlotante />

      {/* ======================================
          VISOR DE IMÁGENES
        ====================================== */}

      {imagenAmpliada && (
        <div
          className="modal-fondo"
          onMouseDown={(evento) => {
            if (evento.target === evento.currentTarget) {
              cerrarImagen();
            }
          }}
        >
          <div
            className="visor-contenido"
            role="dialog"
            aria-modal="true"
            aria-label={imagenAmpliada.nombre}
          >
            <button
              ref={botonCerrarRef}
              type="button"
              className="modal-cerrar"
              onClick={cerrarImagen}
              aria-label="Cerrar fotografía"
            >
              ×
            </button>

            <img
              src={imagenAmpliada.imagen}
              alt={imagenAmpliada.nombre}
            />

            <div className="visor-detalles">
              <h3>{imagenAmpliada.nombre}</h3>

              <p>{imagenAmpliada.descripcion}</p>

              {/* GALERÍA: SIN WHATSAPP */}

              {imagenAmpliada.esTrabajo ? (
                <span className="trabajo-etiqueta">
                  Trabajo realizado
                </span>
              ) : imagenAmpliada.esCategoria ? (
                <button
                  type="button"
                  className="boton-ver-tazas"
                  onClick={() => {
                    const id = imagenAmpliada.categoria;
                    cerrarImagen();
                    cambiarSeccion(id);
                  }}
                >
                  Ver modelos
                </button>
              ) : imagenAmpliada.subcategoria ===
                "arenadas" ? (
                <button
                  type="button"
                  className="boton-ver-tazas"
                  onClick={() => {
                    cerrarImagen();
                    cambiarSeccion("arenadas");
                  }}
                >
                  Ver colores disponibles
                </button>
              ) : (
                <BotonWhatsApp
                  nombreProducto={imagenAmpliada.nombre}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
