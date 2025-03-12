/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import { createPun, deletePun, fetchPun, fetchPuns, updatePun } from '../services/punService';
import { IPun, PunCreate, PunUpdate } from '../types/Pun';

export const usePun = () => {
  const [puns, setPuns] = useState<IPun[]>(() => {
    const cachedPuns = localStorage.getItem('puns') 
    return cachedPuns ? JSON.parse(cachedPuns) : []
  });

  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false); 
  
  useEffect(() => {
    console.log('UseEffect')
    
    if (puns.length > 0) return
    fetchPunsHandler();
    setTimeout(() => { 
      console.log('Clearing localStorage')
      localStorage.removeItem('puns') }, 1000 * 10) // 10 minutes
  }, []);

  const fetchPunsHandler = async () => {
    console.log('fetchPunsHandler')
    setIsLoading(true);

    try {
      const data = await fetchPuns();
      localStorage.setItem('puns', JSON.stringify(data));
      setPuns(data);
    } catch (error) {
      setError("Error fetching puns");
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  const fetchCachedPunById = (id: string) => {
    const cachedPun = puns.find(pun => pun._id === id);
    
    if (!cachedPun) return null

    return cachedPun;
  }

  const fetchPunByIdHandler = async (id: string) => {
    const cachedPun = fetchCachedPunById(id);
    if (cachedPun) return cachedPun;

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
      const newPun = await createPun(payload);
      const updatedPuns = [...puns, newPun];
      localStorage.setItem('puns', JSON.stringify(updatedPuns));
      setPuns(updatedPuns);
    } catch (error) {
      setError("Error creating pun");
      throw error;
    } finally {
      setIsLoading(false);
    }
  }
  
  const updatePunHandler = async (id: string, payload: PunUpdate) => {
    // setIsLoading(true);
    const oldPuns = puns;
    
    try {
      const updatedPuns = puns.map(pun => (
        pun._id === id 
        ? {...pun, ...payload}  // {_id: 1232, content: 'old content', date: '', content: 'new content'}
        : pun
      ));
      localStorage.setItem('puns', JSON.stringify(updatedPuns));
      setPuns(updatedPuns);
      await updatePun(id, payload);
    } catch (error) {
      setError("Error updating pun");
      rollBackPunChanges(oldPuns);
      throw error;
    } finally {
      // setIsLoading(false);
    }
  }

  const deletePunHandler = async (id: string) => {
    // setIsLoading(true);
    const oldPuns = puns;

    try {
      const updatedPuns = puns.filter(pun => pun._id !== id);
      localStorage.setItem('puns', JSON.stringify(updatedPuns));
      setPuns(updatedPuns);
      await deletePun(id); // Moves down await for Optimistic UI.
    } catch (error) {
      console.log('Error deleting pun')  
      setError("Error deleting pun");
      rollBackPunChanges(oldPuns);
      throw error;
    } finally {
      // setIsLoading(false);
    }
  }

  const rollBackPunChanges = (oldPuns: IPun[]) => {
    localStorage.setItem('puns', JSON.stringify(oldPuns));
    setPuns(oldPuns);
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
