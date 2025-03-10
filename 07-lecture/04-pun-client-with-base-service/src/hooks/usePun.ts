/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { createPun, deletePun, fetchPun, fetchPuns, updatePun } from '../services/punService';
import { IPun, PunCreate, PunUpdate } from '../types/Pun';

export const usePun = () => {
  const [puns, setPuns] = useState<IPun[]>([])
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false); 
  
  // useEffect(() => {
  //   console.log('UseEffect')
  //   setIsLoading(true);
    
  //   fetchPuns()
  //   .then((data) => setPuns(data))
  //   .catch((_error: unknown) => {
  //     setError("Error fetching puns")
  //     throw error; 
  //   })
  //   .finally(() => setIsLoading(false));
  // }, [])

  const fetchPunsHandler = async () => {
    setIsLoading(true);

    try {
      const data = await fetchPuns();
      setPuns(data);
    } catch (error) {
      setError("Error fetching puns");
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  const fetchPunByIdHandler = async (id: string) => {
    setIsLoading(true);

    try {
      return await fetchPun(id);
    } catch (error) {
      setError("Error fetching pun");
      throw error;
    } finally {
      setIsLoading(false);
    }
  }
  
  const createPunHandler = async (payload: PunCreate) => {
    setIsLoading(true);
    
    try {
      return await createPun(payload);
    } catch (error) {
      setError("Error creating pun");
      throw error;
    } finally {
      setIsLoading(false);
    }
  }
  
  const updatePunHandler = async (id: string, payload: PunUpdate) => {
    setIsLoading(true);
    
    try {
      return await updatePun(id, payload);
    } catch (error) {
      setError("Error updating pun");
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  const deletePunHandler = async (id: string) => {
    setIsLoading(true);
    
    try {
      await deletePun(id);
      const newPuns = puns.filter(pun => pun._id !== id);
      setPuns(newPuns);
    } catch (error) {
      setError("Error deleting pun");
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  return {
    puns, 
    isLoading,
    error,
    fetchPunsHandler,
    fetchPunByIdHandler, 
    createPunHandler, 
    updatePunHandler, 
    deletePunHandler
  }
}
