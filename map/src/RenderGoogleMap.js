import React, { useRef, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css'
import useSupercluster from "use-supercluster";

const Ponto = ({children}) => children;

function RenderGoogleMap (props){


  //variaveis nescessarias para atualizar a localização de um cluster de pontos
  const refMapa = useRef()
  const [zoom, zoomAtual] = useState(10)
  const [bordas, bordaAtual] = useState(null)
    

  //Todos os pontos devem ser transformados em geojson para serem usados pelo cluster
  const pontos = Array.from(props.pontos)
  const geojsonPontos = pontos.map(ponto => ({
      type: 'Feature',
      properties: {
        cluster: false,
        itemId: ponto.name
      },
      geometry: {
        type: 'Point',
        coordinates: [
          parseFloat(ponto.longitude), 
          parseFloat(ponto.latitude)
        ]
      }
  }))


  //Após as informações estarem prontas, é feita a clusterisação de todos os pontos
  const { clusters } = useSupercluster ({
    points: geojsonPontos,
    bounds: bordas,
    zoom: zoom,
    options: {radius : 75, maxZoom: 20}
  });


  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDaNfcmLikMtJleleQOombeRqXCakMfpN8' }}
        defaultCenter={{ lat: 52.6376, lng: -1.135171 }}
        defaultZoom={10}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          refMapa.current = map;
        }}
        onChange={({ zoom, bounds }) => {
            zoomAtual(zoom);
            bordaAtual([
                bounds.nw.lng,
                bounds.se.lat,
                bounds.se.lng,
                bounds.nw.lat
              ]
            );

        }}
      >

        {clusters.map(cluster => {
          const [longitude, latitude] = cluster.geometry.coordinates
          const {
            cluster : isCluster,
            point_count: pointCount
          } = cluster.properties

          if(isCluster){
            return(
              <Ponto key={cluster.id} lat={latitude} lng={longitude}>
                <div className='marcaPin'>
                  {pointCount}
                </div>    
              </Ponto>
            )

          }
          return(
            <Ponto key={cluster.properties.itemId} lat={latitude} lng={longitude}>
                <div className='marcaPin'>
                    {cluster.properties.itemId}
                </div>    
            </Ponto>
          )
        })}
        
      </GoogleMapReact>
    </div>
  );
  
}

export default RenderGoogleMap;
